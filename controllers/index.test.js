var Browser = require('zombie');

Browser.localhost(process.env.IP, process.env.PORT);

describe('User visits index page', function() {
    var browser = new Browser();
    
    before(function() {
        return browser.visit('/');
    });
    
    it('should be successful', function() {
        browser.assert.success();
    });
    
    it('should see welcome page', function() {
        browser.assert.text('<h1>A KAPPAKEEPO4NÉGYHEAD cég ügyfélnyilvántartó és ügyfélkezelő rendszere.</h1>');
    });
});