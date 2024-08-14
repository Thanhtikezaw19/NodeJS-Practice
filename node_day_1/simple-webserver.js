const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

//can use nodemon to restart server for every change and without stopping the node

server.listen(3000, function () {
  console.log("Successfully Started");
});
