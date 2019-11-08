const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

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
server.get("/api/friends", (req, res) => {
  res.json(friends);
});

module.exports = server;
