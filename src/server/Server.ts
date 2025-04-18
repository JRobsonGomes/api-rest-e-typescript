import express from "express";

const server = express();
const PORT = process.env.PORT || 3000;

server.get("/", (_, res) => {
  res.send("Hello, World!");
});

export {server};
