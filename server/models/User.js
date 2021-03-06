const mongoose = require('mongoose');

const { Schema } = mongoose;

const TrackSchema = new Schema({
  id: { type: String },
  name: { type: String },
  album: { type: Object },
  artists: { type: Array },
  isFavorited: { type: Boolean, default: false },
  uri: { type: String }
});

const PlaylistSchema = new Schema({
  title: { type: String },
  query: { type: String },
  tracks: [TrackSchema]
});

const CacheSchema = new Schema({
  query: { type: String },
  tracks: [TrackSchema]
});

const UserSchema = new Schema(
  {
    spotifyId: { type: String, index: true },
    name: { type: String },
    accessToken: { type: String },
    refreshToken: { type: String },
    playlists: [PlaylistSchema],
    favorites: [TrackSchema],
    cache: [CacheSchema]
  },
  { autoIndex: false }
);

module.exports = mongoose.model('User', UserSchema);
