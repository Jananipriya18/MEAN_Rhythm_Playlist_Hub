const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  songName: {
    type: String,
    required: true,
    trim: true, // Remove leading and trailing whitespaces
  },
  genre: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
    trim: true, // Remove leading and trailing whitespaces
  },
  songMovieName: {
    type: String,
    required: true,
    trim: true, // Remove leading and trailing whitespaces
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now, 
  },
  userId: {
    type: String,
    required: true,
  },
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
