var api = require('../api');
var Attendee = require('../entity/attendee');

const ENTITY_PATH = '/event';

function Event(data) {
    for (var i in data) {
        this[i] = data[i];
    }
}

// class methods

Event.prototype.attendees = function(cb) {
    api.restAPICall('POST', ENTITY_PATH + '_list_attendees', { id: this.id }, function (err, res) {
        if (err) {
            cb(err, null);
        }
        else {
            var attendees = [];

            for (var i in res.attendees) {
                var event = new Attendee(res.attendees[i].attendee);
                attendees.push(event);
            };
            
            cb(null, attendees);
        }
    });
};

// static methods

Event.all = function(cb) {
    api.restAPICall('POST', '/organizer_list_events', { id: require('../eventbrite-sdk').configuration('organizerId') }, function (err, res) {
        if (err) {
            cb(err, null);
        }
        else {
            var events = [];

            for (var i in res.events) {
                var event = new Event(res.events[i].event);
                events.push(event);
            };
            
            cb(null, events);
        }
    });
};

Event.get = function(id, cb) {
    api.restAPICall('POST', ENTITY_PATH + '_get', { id: id }, function (err, res) {
        if (err) {
            cb(err, null);
        }
        else {
            var event = new Event(res.event);
            cb(null, event);
        }
    });
};

// exports

module.exports = Event;