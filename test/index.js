var datejs = require('datejs');
var expect = require('chai').expect;

var Eventbrite = require('../index');

require('dotenv').config();

Eventbrite.configure({
    appKey: process.env.EVENTBRITE_APP_KEY,
    userKey: process.env.EVENTBRITE_USER_KEY,
    organizerId: process.env.EVENTBRITE_ORGANIZER_ID
});

describe('event', function() {

    this.timeout(4000);

    it('all', function(done) {
        Eventbrite.event.all(function(err, events) {
            expect(err).to.be.null;
            expect(events).to.be.a('array');
            done();
        });
    });

});