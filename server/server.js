// using Express.js to create a web server, express is a dependency
const express = require('express')
const app = express()

/* using node and express server as API 
below is a created endpoint for the data route
*/
app.get("/api", (req, res) => {
    res.json({ "message": "hello its tha backend"})
})

app.listen(5000, () => { console.log("Server is up and running.") })