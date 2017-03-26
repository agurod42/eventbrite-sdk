var datejs = require('datejs');
var expect = require('chai').expect;

var Eventbrite = require('../index');

require('dotenv').config();

const EVENT_ID = 24706151765;

Eventbrite.configure({
    appKey: process.env.EVENTBRITE_APP_KEY,
    userKey: process.env.EVENTBRITE_USER_KEY,
    organizerId: process.env.EVENTBRITE_ORGANIZER_ID
});

describe('event', function () {

    this.timeout(4000);

    it('all', function(done) {
        Eventbrite.event.all(function (err, events) {
            expect(err).to.be.null;
            expect(events).to.be.a('array');
            expect(events[0].id).to.be.a('number');
            done();
        });
    });

    it('get', function (done) {
        Eventbrite.event.get(EVENT_ID, function (err, event) {
            expect(err).to.be.null;
            expect(event).to.be.a('object');
            expect(event.id).to.be.a('number');
            done();
        });
    });

    it('attendees', function (done) {
        Eventbrite.event.get(EVENT_ID, function (err, event) {
            event.attendees(function (err, attendees) {
                expect(err).to.be.null;
                expect(attendees).to.be.a('array');
                expect(attendees[0].id).to.be.a('number');
                done();
            });
        });
    });

});