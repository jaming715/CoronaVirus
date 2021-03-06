const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema(
  {
    author: String,
    title: String,
    source: String,
    link: String,
    pubDate: String,
    contentSummary: String,
    version: String,
  },
  {
    timestamps: true,
    collection: 'News',
  },
);
const News = mongoose.model('News', NewsSchema);
module.exports = News;
