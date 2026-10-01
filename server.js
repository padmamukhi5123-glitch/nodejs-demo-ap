import http from 'node:http';

const PORT = process.env.PORT || 3000;

export function createServer() {
  return http.createServer((req, res) => {
    if (req.url === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok' }));
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!doctype html>
      <html>
        <head>
          <title>Node.js CI/CD Demo</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
          <h1>Node.js CI/CD Demo</h1>
          <p>Deployed with GitHub Actions and Docker.</p>
        </body>
      </html>
    `);
  });
}

if (process.env.NODE_ENV !== 'test') {
  createServer().listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}
