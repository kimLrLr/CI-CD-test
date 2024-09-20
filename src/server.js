const express = require('express');
const app = express();

app.listen(8080, '0.0.0.0', () => {
  console.log(`http://112.172.232.229:8080 에서 서버 실행 중`);
});

app.get('/', (req, res) => {
  res.send('hello~~! this is test page!!!');
});
