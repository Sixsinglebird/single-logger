# single-logger
### example usage

const logger = require("single-logger");
const events = require("events");
class Event extends events {}
const emitEvent = new Event();

app.get("/", async (req, res) => {
  emitEvent.emit("log", "app", `GET`, req.url);
  // code to response to the request
});

app.listen(PORT);

emitEvent.on("log", (event, level, message) => {
    logger.logEvent(event, level, message);
});

