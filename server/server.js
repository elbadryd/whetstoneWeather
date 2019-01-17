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
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.cityName}&APPID=c40bc7a9330f14625233d84173185427`)
  .then(response => {
    console.log(response.data, 'success');
    res.send(response.data)
  })
  .catch(err=>{
    console.log(err, 'error');
    res.sendStatus(404)
  })
})
app.get('/forecast', (req, res) => {
  axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.query.cityName}&APPID=c40bc7a9330f14625233d84173185427`)
    .then(response => {
      console.log(response.data, 'success');
      res.send(response.data)
    })
    .catch(err => {
      console.log(err, 'error');
      res.sendStatus(404)
    })
})
app.listen(PORT, () => {
  console.log(path.join(__dirname + '/../dist/whetstone-weather'))
  console.log(`listening on http://localhost:${PORT}!`);
});