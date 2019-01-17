const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var path = require('path');
const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, '/../dist/whetstone-weather')));
app.use(bodyParser.json({
  extended: true
}))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/weather', (req, res)=>{
  console.log(req.query.cityName, 'hit');
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.query.cityName}&APPID=c40bc7a9330f14625233d84173185427`)
  .then(response => {
    console.log(response);
    res.send(response.data.list)
  })
  .catch(err=>{
    res.send(err)
  })
})
app.listen(PORT, () => {
  console.log(path.join(__dirname + '/../dist/whetstone-weather'))
  console.log(`listening on http://localhost:${PORT}!`);
});