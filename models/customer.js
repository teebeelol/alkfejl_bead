module.exports = {
    identity: 'customer',
    connection: 'default',
    attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true,
        },
        name: {
            type: 'string',
            required: true,
        },
        validity: {
            type: 'datetime',
            defaultsTo: function () { return new Date(); },
            required: true,
        },
        status: {
            type: 'boolean',
            defaultsTo:false,
            required: true,
        },
        phonenumber: {
            type: 'string',
            required: true,
        },
    }
}