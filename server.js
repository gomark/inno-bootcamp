var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


// Test xx xx xx
app.listen(port);

console.log('todo list RESTful API server startedd on: ' + port);

app.get("/", (req, res, next) => {
  console.log("/ -- node03");
  res.status(200).send('hello world from main-app');
});

app.get("/key1", (req, res, next) => {
  console.log("/node03");
  res.status(200).send('key1=' + process.env.key1);
});

app.get("/health", (req, res, next) => {
  console.log("log /health");
  res.status(200).send('log /health of node03');
});

app.get("/node03/health", (req, res, next) => {
  console.log('log node03/health - rev15');
  res.status(200).send('log node03/health of node03 - rev15');
});

app.get("/node03/color", (req, res, next) => {
  res.status(200).send('OK.BlueBluePattaya');
});

app.get("/node03/service2", (req, res, next) => {
  res.status(200).send('OK.OK.Service2');
});

app.get("/node03/service3", (req, res, next) => {
  res.status(200).send('OK.OK.Service3');
});

app.get("/node03/loginService", (req, res, next) => {

  console.log("DEBUG (1)");
  console.log("INFO (2)(3)");
  const URL_SERVICE1 = process.env.URL_SERVICE1;
  const URL_SERVICE2 = process.env.URL_SERVICE2;
  res.json([URL_SERVICE1, "Lisa-xxxyy", "Michael", URL_SERVICE2, req.query.userId]);
  
});

app.use(express.json());

