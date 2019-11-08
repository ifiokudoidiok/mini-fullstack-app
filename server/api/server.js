const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const marketRouter = require("../config/router");
const server = express();
server.use(helmet());

const friends = [
  { id: 1, name: "Ifiok" },
  { id: 2, name: "Jill" },
  { id: 3, name: "Joe" }
];

server.use(express.json());
server.use(cors());
server.get("/", (req, res) => {
  res.send("server is live!");
});
server.use("/api", logger, marketRouter);
server.get("/api/friends", (req, res) => {
  res.json(friends);
});

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.host}`
  );

  next();
}
module.exports = server;
