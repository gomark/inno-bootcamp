var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


// Test xx xx xx yy
app.listen(port);

console.log('todo list RESTful API server startedd on: ' + port);

app.get("/", (req, res, next) => {
  console.log("/ -- hello world: main-app");
  res.status(200).send('hello world from main-app');
});

app.get("/key1", (req, res, next) => {
  console.log("/key1");
  res.status(200).send('key1=' + process.env.key1);
});

app.get("/liveness", (req, res, next) => {
  console.log("log /liveness");
  res.status(200).send('log /liveness of main-app');
});

app.get("/health", (req, res, next) => {
  console.log("log /health");
  res.status(200).send('log /health of main-app');
});

REDIS_PORT = process.env.redis_port;
REDIS_HOST = process.env.redis_host;

console.log("REDIS_PORT=" + REDIS_PORT);
console.log("REDIS_HOST=" + REDIS_HOST);

const redis = require("redis");
const client = redis.createClient(REDIS_PORT, REDIS_HOST);

function getCacheById(key) {
  return new Promise((resv, rej) => {
    client.get(key, (err, reply) => {
      resv(reply);
    });
  })
  
}

client.on("error", function(error) {
  console.error(error);
});

app.get("/test-redis", (req, res, next) => {
  console.log('/test-redis');
  client.set("key", "set-value", redis.print);
  key = client.get("key", redis.print);
  getCacheById("key").then(function(result) {
    res.status(200).send(result);
  });
    
});



app.use(express.json());

