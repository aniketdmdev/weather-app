// Getting environment variables in the project
require('dotenv').config()

// Creating a server using express
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const cors = require('cors');

// CORS to allow requrests from different servers.
app.use(cors());
// To set the body format as JSON unless stated otherwise
app.use(express.json());

// Port to run the API on
const port = process.env.PORT || 3001;

// Defining internal routes with their extensions
const weatherRoute = require('./routers/weather')

// Base route to check availability of server
app.get('/', (req, res) => {
    const message = 'API Base route.';
    res.send({ message, status: true });
});

app.use('/weather', weatherRoute);

server.listen(port, () => console.log(`server is running on port ${port}`));