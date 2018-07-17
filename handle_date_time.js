function strtotime(strDate) {
    //"2017-09-15 00:00:00.000"
    var unixTimestamp = Math.round(new Date(strDate).getTime()/1000);
    console.log(unixTimestamp);
    return unixTimestamp;
}

// with moment.js
moment("2017-09-15 00:00:00.000").unix();


// Copy & Paste this
Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

// Get the current time as Unix time
var currentUnixTime = Date.time();
currentUnixTime = Date.now().getUnixTime(); // same as above

// Parse a date and get it as Unix time
var parsedUnixTime = new Date('Mon, 25 Dec 1995 13:30:00 GMT').getUnixTime();
// parsedUnixTime==819898200
