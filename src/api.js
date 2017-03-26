var qs = require('qs');
var request = require('request');

// default config
var configuration = {
    host: 'https://www.eventbrite.com/json',
};

module.exports = {

    configure: function(options) {
        if (typeof(options) !== 'object') throw 'options should be of type object';
        if (!options.appKey) throw 'appKey is required in Eventbrite SDK configuration';
        if (!options.userKey) throw 'userKey is required in Eventbrite SDK configuration';

        configuration = Object.assign(configuration, options);
    },

    restAPICall: function(httpMethod, path, data, cb) {
        var body = {
            app_key: configuration.appKey,
            user_key: configuration.userKey
        };

        if (data) {
            body = Object.assign(body, data);
        }
        
        request(
            {
                body: '',
                headers: {
                    'User-Agent': 'agurz/eventbrite-sdk',
                },
                method: httpMethod,
                uri: configuration.host + path + '?' + qs.stringify(body),
            },
            function(err, res, body) {
                if (err) {
                    console.error(err);
                }
                else {
                    var body = JSON.parse(body);
                    if (res.statusCode === 200 && body.error) err = body.error;
                    else if (res.statusCode !== 200) err = body;
                }

                cb(err, body);
            }
        );
    },

};