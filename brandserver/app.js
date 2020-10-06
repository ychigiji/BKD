const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extened: true
  })
);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
  // res.send("app is up and running")
});
app.post("/", function(req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const url = "https://us17.api.mailchimp.com/3.0/lists/174c789af6";
  const options = {
    method: "POST",
    auth: "yolie:595aa549c9277f2d59dd29f36fe75d0d-us17"
  };
  const request = https.request(url, options, function(response) {
    if (response.statusCode == 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function(data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
  // console.log(firstName, lastName, email);
});
app.post("/failure", function(req, res) {
  res.redirect("/");
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});

// 595aa549c9277f2d59dd29f36fe75d0d-us17

// list ID
//
