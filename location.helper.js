conlose.log( 
window.location.host + "\n" 
+ window.location.hostname
+ "\n" + window.location.port
+ "\n" + location.pathname + "\n"
+ location.protocol );

var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

// window.location.host => host + port
// window.location.hostname => host only


// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host (without port)
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign loads a new document


var arr = window.location.href.split('/');
var url = arr[0] + '//' + arr[2];

var port = window.location.port || (protocol === 'https' ? '443' : '80');
//The protocol property sets or returns the protocol of the current URL, including the colon (:).
//This means that if you want to get only the HTTP/HTTPS part you can do something like this:
var protocol = window.location.protocol.replace(/:/g,'')
// Get protocol, domain, and port from URL
var domain_url = window.location.href.split('/').slice(0, 3).join('/');
