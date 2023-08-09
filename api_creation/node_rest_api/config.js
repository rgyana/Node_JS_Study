const http = require('http');
const app = require('./app');

// we have created server file by getting it to listen for the connection.
const PORT = process.env.PORT || 3000
// With the process.env.PORT variable, we set up the port automatically by allowing the API to be deployed to a cloud platform like AWS or Azure. In case the process.env.PORT variable is not set, we’ll default to using port 3000.

const server = http.createServer(PORT);
server.listen(app);