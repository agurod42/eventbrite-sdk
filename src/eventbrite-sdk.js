var api = require('./api');

var organizerId;

module.exports = {

    configure: function (options) {
        if (typeof(options) !== 'object') throw 'options should be of type object';
        if (!options.organizerId) throw 'organizerId is required in Eventbrite SDK configuration';

        organizerId = options.organizerId;

        api.configure(options);
    },
    configuration: api.configuration,
    event: require('./entity/event'),
    order: null,
    organizer: null,
    user: null,
    version: '1.0',

    // getters

    getOrganizerId: function () { return organizerId; },

};