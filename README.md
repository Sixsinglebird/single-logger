# single-logger
example usage
`////////////////////////////////////////////////
// imports
const logger = require("single-logger");


////////////////////////////////////////////////
// app routes

app.get("/", async (req, res) => {
  emitEvent.emit("log", "app", `GET`, req.url);
  // code to response to the request
});

////////////////////////////////////////////////
// listener
app.listen(PORT);

// logger
emitEvent.on("log", (event, level, message) => {
    logger.logEvent(event, level, message);
});`
