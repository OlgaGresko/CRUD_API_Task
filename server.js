import http from 'http';

// import { userControllers } from './controllers/index';
// import controllerWrapper from './decorators/controllerWrapper';

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/users') {
    // userControllers.getAll(req, res);
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