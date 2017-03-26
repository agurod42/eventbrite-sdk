var api = require('../api');

const entityPath = '/event';

module.exports = {

    all: function(cb) {
        api.restAPICall('GET', '/organizer_list_events', { id: require('../eventbrite-sdk').getOrganizerId() }, function(err, res) {
            if (err) {
                cb(err, null);
            }
            else {
                var events = [];

                for (var i in res.events) {
                    events.push(res.events[i].event);
                };

                cb(null, events);
            }
        });
    },

    get: function(id, cb) {
        api.restAPICall('POST', entityPath + '_get', { id: id }, function(err, res) {
            cb(err, res);
        });
    },
    
};