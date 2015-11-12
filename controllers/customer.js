var express = require('express');
var app = express.Router();

//Viewmodel réteg
var statusTexts = {
    'new': 'Új',
    'assigned': 'Hozzárendelve',
    'ready': 'Kész',
    'rejected': 'Elutasítva',
    'pending': 'Felfüggesztve',
};
var statusClasses = {
    'Új' : 'danger',
    'Hozzárendelve' : 'info',
    'Kész' : 'success',
    'Elutasítva' : 'default',
    'Felfüggesztve' : 'warning',
};

function decorateCustomers(customerContainer) {
    return customerContainer.map(function (e) {
        if(e.status){
            e.statusText = statusTexts['ready'];
        }
        else{
            e.statusText = statusTexts['pending'];
        }
        e.statusClass = statusClasses[e.statusText];
        e.validityFormated = e.validity.toISOString().substring(0, 10);
        return e;
    });
}

function ensureAuthenticatedToNew(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
            req.flash('info', 'Bejelentkezés szükséges');
            req.flash('type', 'danger');
            res.redirect('/customers/list');
}

app.get('/list', function (req, res) {
    req.app.models.customer.find().then(function (customers) {
        decorateCustomers(customers);
        var type = (req.flash('type') || [{}]).pop();
        res.render('customers/list', {
            customers: decorateCustomers(customers),
            type: type,
            messages: req.flash('info'),
        });
    });
});

app.get('/new', ensureAuthenticatedToNew, function (req, res) {
    var validationErrors = (req.flash('validationErrors') || [{}]).pop();
    var type = (req.flash('type') || [{}]).pop();
    var data = (req.flash('data') || [{}]).pop();
    
    res.render('customers/new', {
        validationErrors: validationErrors,
        data: data,
        type: type,
    });
});

app.post('/new', function (req, res) {
    // adatok ellenőrzése
    req.checkBody('username', 'Hibás felhasználónév').notEmpty().withMessage('Kötelező megadni!');
    req.checkBody('name', 'Hibás név').notEmpty().withMessage('Kötelező megadni!');
    req.checkBody('validity', 'Hibás dátum').notEmpty().isDate().withMessage('Kötelező megadni!');
    req.checkBody('phonenumber', 'Hibás telefonszám').notEmpty().withMessage('Kötelező megadni!');
    
    var validationErrors = req.validationErrors(true);
    //console.log(validationErrors);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/customers/new');
    }
    else {
        // adatok elmentése (ld. később) és a hibalista megjelenítése
        req.app.models.customer.create({
            username: req.body.username,
            name: req.body.name,
            validity: req.body.validity,
            status: new Date(req.body.validity) > new Date(),
            phonenumber: req.body.phonenumber,
        })
        .then(function (customer) {
            //siker
            res.format({
                'text/html': function(){
                    var edited = (req.flash('edited') || [{}]).pop();
                    if(edited){
                        req.flash('info', 'Ügyfél sikeresen módosítva!');
                    }
                    else{
                        req.flash('info', 'Ügyfél sikeresen felvéve!');
                    }
                    req.flash('type','success');
                    res.redirect('/customers/list');
                },
                'application/json': function () {
                    res.json(customer);
                }
            });
        })
        .catch(function (err) {
            //hiba
            console.log(err);
        });
    }
});

app.post('/customer/:id', function (req, res) {
    var id = req.params.id;
    // adatok ellenőrzése
    req.checkBody('message', 'Hibás üzenet').notEmpty().withMessage('Kötelező megadni!');
    
    var validationErrors = req.validationErrors(true);
    //console.log(validationErrors);
    
    if (validationErrors) {
        // űrlap megjelenítése a hibákkal és a felküldött adatokkal
        req.flash('validationErrors', validationErrors);
        req.flash('data', req.body);
        res.redirect('/customers/customer');
    }
    else {
        // adatok elmentése (ld. később) és a hibalista megjelenítése
        req.app.models.customer.find({id: id}).then(function (customer) {
            
            console.log(customer);
            var cust = customer.pop();
            req.app.models.customerticket.create({
            message: req.body.message,
            date: new Date(),
            customer: cust.username,
            
        })
        .then(function (customer) {
            //siker
            res.format({
                'text/html': function(){
                    req.flash('info', 'Üzenet sikeresen felvéve!');
                    req.flash('type','success');
                    res.redirect('/customers/customer/' + id);
                },
                'application/json': function () {
                    res.json(customer);
                }
            });
        })
        .catch(function (err) {
            //hiba
            console.log(err);
        });
        });

    }
});

app.get('/customer/:id', ensureAuthenticatedToNew, function(req, res) {
        var id = req.params.id;
        req.app.models.customer.find({id: id}).then(function (customer) {
            var cust = customer.pop();
            req.app.models.customerticket.find({where: {customer: cust.username}}).then(function (customerMessages) {
                //console.log(customerMessages);
                customerMessages.map(function (e) {
                    e.dateFormated = e.date.toISOString().substring(0, 10);
                });
                cust.validityFormated = cust.validity.toISOString().substring(0, 10);
                //res.render('customers/customer/' + id, {
                res.render('customers/customer', {
                    customer: cust,
                    customerMessages: customerMessages,
                    messages: req.flash('info'),
                    type: req.flash('type'),
            });
        });
    });
});

app.get('/delete/:id', ensureAuthenticatedToNew, function(req, res) {
    var id = req.params.id;
    req.app.models.customer.destroy({id: id}).then(function (deletedCustomers) {
            var cust = deletedCustomers.pop();
            req.app.models.customerticket.destroy({customer: cust.username}).then(function (deletedMessages) {
                res.format({
                    'text/html': function(){
                        req.flash('info', 'Ügyfél sikeresen törölve!');
                        req.flash('type', 'success');
                        res.redirect('/customers/list');
                    },
                    'application/json': function () {
                        res.json({ success: true });
                }
            });
        });
    });
});

app.get('/edit/:id', ensureAuthenticatedToNew, function(req, res) {
        var id = req.params.id;
            req.app.models.customer.destroy({id: id})
        .then(function (deletedCustomers) {
            res.format({
                'text/html': function(){
                    req.flash('data', deletedCustomers);
                    req.flash('id', id);
                    req.flash('edited','true');
                    res.redirect('/customers/new');
                },
                'application/json': function () {
                    res.json({ success: true });
                }
            });
        });
});

module.exports = app;