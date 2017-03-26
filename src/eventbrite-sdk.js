var api = require('./api');

var configuration = {};

module.exports = {

    configure: function (options) {
        if (typeof(options) !== 'object') throw 'options should be of type object';
        if (!options.organizerId) throw 'organizerId is required in Eventbrite SDK configuration';

        configuration.organizerId = options.organizerId;

        api.configure(options);
    },
    configuration: function (option) {
        if (!option) {
            return Object.assign(configuration, api.configuration);
        }
        else {
            return configuration[option];
        }
    },

    attendee: require('./entity/attendee'),
    event: require('./entity/event'),
    order: null,
    organizer: null,
    user: null,

    version: '1.0',

};