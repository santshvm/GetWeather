const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body.cityName);
  const queryByCity = req.body.cityName;
  const apiKey = "8d28ce6ebda15ad21a721dc06f8dfecd";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + queryByCity + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      // console.log(weatherData);

      const temp = weatherData.main.temp;
      const feelsLike = weatherData.main.feels_like;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<h1>The temp in " + req.body.cityName + " is : " + temp + " degrees celsius</h1>");
      res.write("<h3>It feels like: " + feelsLike + " degrees celsius</h3>");
      res.write("<h3> description: " + weatherDescription + "</h3>");
      res.write("<img src = " + imgURL + ">");
      res.send();

    })
  })
})




app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
