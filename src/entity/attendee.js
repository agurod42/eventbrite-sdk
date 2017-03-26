var api = require('../api');

const ENTITY_PATH = '/attendee';

function Attendee(data) {
    for (var i in data) {
        this[i] = data[i];
    }
}

// class methods

// static methods

// exports

module.exports = Attendee;