// Express
res.status(401);
res.send('string');
// or the shortcut method
res.send(401, 'string');

// HTTP
res.writeHead(401);
res.end('string');
