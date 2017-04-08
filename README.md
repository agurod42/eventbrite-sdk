# Eventbrite-SDK

Unofficial SDK for Eventbrite API written in JavaScript for NodeJS

[![Build Status](https://travis-ci.org/agurz/Eventbrite-SDK.svg?branch=master)](https://travis-ci.org/agurz/Eventbrite-SDK)

## Getting Started

1. Install

    npm install eventbrite-sdk --save

2. Require `eventbrite-sdk` in your file

    ```javascript
    var Eventbrite = require('eventbrite-sdk');
    ```
        
3. Configure

    ```javascript
    Eventbrite.configure({
        appKey: process.env.EVENTBRITE_APP_KEY,
        userKey: process.env.EVENTBRITE_USER_KEY,
        organizerId: process.env.EVENTBRITE_ORGANIZER_ID
    });
    ```
                
4. Invoke SDK methods

    ```javascript
    Eventbrite.organizer.events(function (err, events) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(events);
        }
    });
    ```
    
## Reference

[TODO]

## Usage example

### Fetching event's attendee list

```javascript
Eventbrite.event.get(EVENT_ID, function (err, event) {
    event.attendees(function (err, attendees) {
        console.log(attendees);
    });
});
```

        
