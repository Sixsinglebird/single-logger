<<<<<<< HEAD
# Single Logger

**single-logger** is a lightweight Node.js logging utility designed to provide simple event logging capabilities. It helps you manage logs in a structured manner and facilitates easy integration into your Node.js applications.

# Installation

You can install single-logger using npm:

```
npm install single-logger
```

# Usage

### importing the module

First, import the logger module into your Node.js application:

```
const logger = require("single-logger");
```

### Logging Events

To log events using single-logger, you can call the 'logEvent functuion:

```
logger.logEvent(event, level, message);
```

- **'event'**: A descriptive label for the event being logged.

- **level**: The severity level of the event (e.g., "INFO", "WARNING", "ERROR").

- **message**: The message or details associated with the event.

example:

```
const event = "app";
const level = "INFO";
const message = "GET request received";
logger.logEvent(event, level, message);
```

# Integration with Event Emitter

**single-logger** can be integrated with Node.js' built-in Event Emitter or other event-driven architectures for streamlined event logging.

Example integration with Event Emitter:

```
const events = require("events");
const emitEvent = new events.EventEmitter();

// Define a listener for your events
emitEvent.on("log", (event, level, message) => {
  logger.logEvent(event, level, message);
});

// Emit an event
emitEvent.emit("log", "app", "INFO", "GET request received");
```

# Configuration

You can configure certain aspects of single-logger by modifying the code according to your needs. The following aspects can be customized:

- **log formatting**: The way log messages are structured, including the date format and fields order.

- **log directory**: The directory structure where log files are stored. By default, logs are saved in the logs/YYYY/MM/ directory structure.

Please refer to the source code for detailed information on how to customize these aspects.

# license

This project is developed under the [MIT License](https://opensource.org/license/mit/)

# About

**single-logger** is developed and maintained by [A. Singleton](https://www.linkedin.com/in/alexander-francis-singleton/)
=======
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

>>>>>>> f71dcb3c9e9a0cd7a1b7ca98c412448c85bb9945
