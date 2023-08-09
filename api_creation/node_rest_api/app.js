// import statements
const express = require('express');
const PORT = require("./config");

// now we have created an app and configured it to parse requests with JSON payloads.
const app = express();
app.use(express.json());

// To set up the server to listen on the specified port
// app.listen(PORT, () => {
//     console.log("Server Listening on PORT:", PORT);
// });

// Lets Define Endpoints to Ensure API is Working
app.get("/status", (request, response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});