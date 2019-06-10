const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos-backend", {useNewUrlParser: true});
mongoose.set("debug", true) // this enables debugging as all executed  collection methods will log output of their arguments to the console
mongoose.Promise = Promise; //ES2015 built in Promise library

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;