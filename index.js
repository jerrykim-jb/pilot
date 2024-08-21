let express = require("express");
let app = express();
const port = 3000;

app.use(express.static('public'));

// Home 페이지 라우트
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});