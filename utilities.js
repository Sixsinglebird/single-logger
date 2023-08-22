const events = require("events");
const { emit } = require("process");
class Event extends events {}
const emitEvent = new Event();

const logRequest = async (event, level, message) => {
  emitEvent.emit("log", event, level, message);
};

const listener = async () => {
  emitEvent.on("log", (event, level, message) => {
    logEvent(event, level, message);
  });
};

module.exports = { logRequest, listener };
