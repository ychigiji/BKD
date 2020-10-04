/**
 * Module dependencies.
 */

var express = require("../..");
var path = require("path");
var redis = require("redis");

var db = redis.createClient();

// npm install redis

var app = express();

app.use(express.static(path.join(__dirname, "public")));

// populate search

db.sadd("ferret", "tobi");
db.sadd("ferret", "loki");
db.sadd("ferret", "jane");
db.sadd("cat", "manny");
db.sadd("cat", "luna");

/**
 * GET search for :query.
 */

app.get("/search/:query?", function(req, res) {
  var query = req.params.query;
  db.smembers(query, function(err, vals) {
    if (err) return res.send(500);
    res.send(vals);
  });
});

/**
 * GET client javascript. Here we use sendFile()
 * because serving __dirname with the static() middleware
 * would also mean serving our server "index.js" and the "search.jade"
 * template.
 */

app.get("/client.js", function(req, res) {
  res.sendFile(path.join(__dirname, "client.js"));
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

// var createError = require("http-errors");
// var express = require("express");
// var path = require("path");
// // const favicon = require("serve-favicon"); //added this
// var cookieParser = require("cookie-parser");
// var logger = require("morgan");
// const cors = require("cors"); // addition we make
// const fileUpload = require("express-fileupload"); //addition we make
// const bodyParser = require("body-parser");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

// var app = express();

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// // Use CORS and File Upload modules here
// app.use(cors());
// app.use(fileUpload());
// app.use("/public", express.static(__dirname + "/public"));

// app.use(bodyParser.urlencoded({ extended: true }));

// // below, also change this to
// app.use("/public", express.static(__dirname + "/public"));

// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;
