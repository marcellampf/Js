const connect = require('connect');
const http = require('http');
const url = require('url');

function calculate(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === '/lab3') {
    const method = query.method;
    const x = parseFloat(query.x);
    const y = parseFloat(query.y);
    let result;
    let operator;

    switch (method) {
      case 'add':
        result = x + y;
        operator = '+';
        break;
      case 'subtract':
        result = x - y;
        operator = '-';
        break;
      case 'multiply':
        result = x * y;
        operator = '*';
        break;
      case 'divide':
        result = y !== 0 ? x / y : 'Cannot divide by zero';
        operator = '/';
        break;
      default:
        res.end('Invalid method. Use add, subtract, multiply or divide.');
        return;
    }

    res.end(`${x} ${operator} ${y} = ${result}`);
  } else {
    res.end('Invalid route. Use /lab3');
  }
}

const app = connect();
app.use(calculate);

http.createServer(app).listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
