

// In Socket.IO 0.7 you have a clients method on the namespaces, this returns a array of all connected sockets.

//API for no namespace:

var clients = io.sockets.clients();
var clients = io.sockets.clients('room'); // all users from room `room`
// For a namespace

var clients = io.of('/chat').clients();
var clients = io.of('/chat').clients('room'); // all users from room `room`
// Hopes this helps someone in the future

