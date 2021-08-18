const express = require("express");

module.exports = (stepService) => {
  const REST_PORT = 8080;

  const app = express();

  app.get("/users/:username/steps", function (req, res) {
    const { username } = req.params;
    const user = stepService.get(username);
    if (!user) {
      res.status(404).send({ error: "User doesn't exist" });
    }
    res.status(200).send(user);
  });
  const server = app.listen(REST_PORT, () => {
    console.log(`server on port ${REST_PORT}`);
  });

  return server;
};
