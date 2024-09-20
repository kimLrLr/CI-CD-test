const express = require('express');
const app = express();

app.listen(9922, () => {
  console.log(`http://localhost:9922 에서 서버 실행 중`);
});

app.get('/', (req, res) => {
  res.send('hello~~! this is test page!!! 수정 테스트중!');
});
