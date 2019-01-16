const express = require('express');
var path = require('path');
const app = express();
const PORT = 8000;

// app.use(express.static(path.join(__dirname, '/../src/app/')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname, '/../src/app/app.component.html')));
});
app.listen(PORT, () => {
  console.log(path.join(__dirname + '/../src/app'))
  console.log(`listening on http://localhost:${PORT}!`);
});