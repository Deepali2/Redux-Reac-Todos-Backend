const express    = require("express"),
      app        = express(),
      cors       = require("cors"),
      morgan     = require("morgan"),
      bodyParser = require("body-parser"),
      todoRoutes = require("./routes/todos");
