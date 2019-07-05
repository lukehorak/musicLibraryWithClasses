const Track = require('./Track');
const Playlist = require('./Playlist');

class Library {
  constructor({ name, creator }) {
    this.name = name;
    this.creator = creator;
    this._allTracks = [];
    this.playlists = [];
  }

  get string() {
    return JSON.stringify(this);
  }

  get prettyString() {
    return JSON.stringify(this, null, 2);
  }

  getPlaylist(name, callback) {
    for (let playlist of this.playlists) {
      if (playlist.name.toLowerCase() === name.toLowerCase()) {
        callback(playlist);
      }
    }
  }

  createPlaylist(name) {
    this.playlists.push(new Playlist( name ))
  }

  addTrackToLibrary(trackData) {
    const newTrack = new Track(trackData)
    this._allTracks.push(newTrack);
  }

  addTrackToPlaylist({ track, playlistName }) {
    this.getPlaylist(playlistName, (playlist) => {
      playlist.addTrack(track);
    });
  }
}

module.exports = Library;