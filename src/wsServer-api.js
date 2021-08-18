const WebSocketServer = require("ws").Server;

module.exports = (stepService) => {
  const WEBSOCKET_PORT = 8081;

  const wsServer = new WebSocketServer({
    port: WEBSOCKET_PORT,
  });

  wsServer.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
      let { username, ts, newSteps } = JSON.parse(message);
      stepService.add(username, ts, newSteps);
    });

    ws.send("something");
    ws.on("close", function close() {
      console.log("disconnected");
    });
  });

  return wsServer;
};
