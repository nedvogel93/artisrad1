const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;