import http from 'http';

import * as userControllers from "./src/controllers/userControllers.js";

const server = http.createServer((req, res) => {
  const url = req.url;

  if (req.method === 'GET' && req.url === '/')  {
    userControllers.getAll(req, res);
    res.statusCode = 200;
  } else if (url === '/posts') {
    // handlePostsRoute(req, res);
  } else {
    // handleDefaultRoute(req, res);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});