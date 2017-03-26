var api = require('../api');
var Event = require('../entity/event');

const ENTITY_PATH = '/organizer';

function Organizer(data) {
    for (var i in data) {
        this[i] = data[i];
    }
}

// class methods

Organizer.events = function (cb) {
    api.restAPICall('POST', ENTITY_PATH + '_list_events', { id: require('../eventbrite-sdk').configuration('organizerId') }, function (err, res) {
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

// static methods

// exports

module.exports = Organizer;