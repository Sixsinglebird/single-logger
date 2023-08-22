# single-logger
example usage

`const logger = require("single-logger");`
`app.get("/", async (req, res) => {`
`  emitEvent.emit("log", "app", `GET`, req.url);`
`  // code to response to the request`
`});`

`// listener`
`app.listen(3000);`

`// logger`
`emitEvent.on("log", (event, level, message) => {`
`    logger.logEvent(event, level, message);`
`});`

