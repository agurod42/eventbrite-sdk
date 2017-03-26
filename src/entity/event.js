var api = require('../api');

const entityPath = '/event';

function Event(data) {
    for (var i in data) {
        this[i] = data[i];
    }
}

// class methods

Event.prototype.attendees = function(cb) {
    api.restAPICall('POST', entityPath + '_list_attendees', { id: this.id }, function (err, res) {

    });
};

// static methods

Event.all = function(cb) {
    api.restAPICall('POST', '/organizer_list_events', { id: require('../eventbrite-sdk').getOrganizerId() }, function (err, res) {
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
    api.restAPICall('POST', entityPath + '_get', { id: id }, function (err, res) {
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