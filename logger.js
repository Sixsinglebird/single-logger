////////////////////////////////////////////////
// imports
// creates a unique identifier for each user
const { v4: uuid } = require("uuid");
const { format, getYear, getMonth } = require("date-fns");
const fs = require("fs");
const promise = require("fs").promises;
const path = require("path");
const events = require("events");
class Event extends events {}
const emitEvent = new Event();

////////////////////////////////////////////////
// function used to log events.
const logEvent = async (event, level, message) => {
  // format does make it more legible
  const date = format(new Date(), "HH:mm:ss");
  const logItem = `${uuid()}\t${date}\t${level}\t${event}\t${message}`;
  // if (DEBUG) console.log(logItem);
  try {
    const logDir =
      "./logs/" + getYear(new Date()) + "/" + getMonth(new Date()) + "/";
    if (!fs.existsSync(logDir)) {
      // this is fun... without the method {recursive: true }
      //  mkdir will not create nested loops
      // if (DEBUG) console.log("Directory made");
      await promise.mkdir(logDir, { recursive: true });
      emitEvent.emit("log", "logger", "WARNING", "New Directory Made.");
    }
    const file = `${format(new Date(), "dd")}_http_events.log`;
    promise.appendFile(path.join(logDir, file), logItem + "\n");
  } catch (err) {
    console.log(err);
  }
};

////////////////////////////////////////////////
// listener
emitEvent.on("log", (event, level, message) => {
  logEvent(event, level, message);
});

////////////////////////////////////////////////
// export
module.exports = { logEvent };
