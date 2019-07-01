

// In Socket.IO 0.7 you have a clients method on the namespaces, this returns a array of all connected sockets.

//API for no namespace:

var clients = io.sockets.clients();
var clients = io.sockets.clients('room'); // all users from room `room`
// For a namespace

var clients = io.of('/chat').clients();
var clients = io.of('/chat').clients('room'); // all users from room `room`
// Hopes this helps someone in the future

//https://stackoverflow.com/questions/6563885/socket-io-how-do-i-get-a-list-of-connected-sockets-clients


// join & leave room
// https://stackoverflow.com/questions/16423150/socket-io-subscribe-to-multiple-channels
// Server
io.sockets.on('connection', function(socket){
    socket.on('subscribe', function(room) { 
        console.log('joining room', room);
        socket.join(room); 
    })

    socket.on('unsubscribe', function(room) {  
        console.log('leaving room', room);
        socket.leave(room); 
    })

    socket.on('send', function(data) {
        console.log('sending message');
        io.sockets.in(data.room).emit('message', data);
    });
});


// Client

 var socket = io.connect();
 socket.on('message', function (data) {
  console.log(data);
 });

 socket.emit('subscribe', 'roomOne');
 socket.emit('subscribe', 'roomTwo');

 $('#send').click(function() {
  var room = $('#room').val(),
   message = $('#message').val();

  socket.emit('send', { room: room, message: message });
 });


// This is all pretty straightforward with the socket.io rooms feature. Take a look at the documentation on LearnBoost wiki.

// https://github.com/LearnBoost/socket.io/wiki/Rooms

// It allows for being connected to multiple rooms over a single socket. I put together a quick test with the following code.

// Server

io.sockets.on('connection', function(socket){
    socket.on('subscribe', function(room) { 
        console.log('joining room', room);
        socket.join(room); 
    })

    socket.on('unsubscribe', function(room) {  
        console.log('leaving room', room);
        socket.leave(room); 
    })

    socket.on('send', function(data) {
        console.log('sending message');
        io.sockets.in(data.room).emit('message', data);
    });
});

// Client
 var socket = io.connect();
 socket.on('message', function (data) {
  console.log(data);
 });

 socket.emit('subscribe', 'roomOne');
 socket.emit('subscribe', 'roomTwo');

 $('#send').click(function() {
  var room = $('#room').val(),
   message = $('#message').val();

  socket.emit('send', { room: room, message: message });
 });

// Sending a message from an Express route is pretty simple as well.
app.post('/send/:room/', function(req, res) {
    var room = req.params.room
        message = req.body;

    io.sockets.in(room).emit('message', { room: room, message: message });

    res.end('message sent');
});
