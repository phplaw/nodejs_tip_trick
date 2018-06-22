function strtotime(strDate) {
    //"2017-09-15 00:00:00.000"
    var unixTimestamp = Math.round(new Date(strDate).getTime()/1000);
    console.log(unixTimestamp);
    return unixTimestamp;
}

// with moment.js
moment("2017-09-15 00:00:00.000").unix();