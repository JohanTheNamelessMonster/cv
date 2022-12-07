const express  = require('express')
const bodyparser = require('body-parser');
const request = require('request')
const https = require('https')

const app = express();
app.use(bodyparser({urlencoded:true}))

app.get("/",function (req,res) {
 const url = "https://v2.jokeapi.dev/joke/Any?type=twopart"
https.get(url,function(response) {
  console.log(response.statusCode);
  response.on("data",function(da){
    const jokeinfo = JSON.parse(da)
    console.log("The joke is a " + jokeinfo.category);
    console.log("Setup : " + jokeinfo.setup);
    console.log("Deliver : " + jokeinfo.delivery);

    res.write("<p>The joke is a " + jokeinfo.category + "</p>")
    res.write("<p>Setup : " + jokeinfo.setup + "</p>")
    res.write("<p>Deliver : " + jokeinfo.delivery + "</p>")
    res.send();
  })
})
  // res.sendFile(__dirname + "/Sign in.html")
})

app.listen(3000,function(){
  console.log("App is running on port 3000");
})
