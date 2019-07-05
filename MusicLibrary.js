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



// Tests to prove I did the thing:
const test = new Library({
  name: "My Library",
  creator: "The Awesomest Dude Ever"
});

test.createPlaylist( "My First Playlist" );

const testTrack = new Track({
  title: "Familiar Drugs",
  artist: "Alexisonfire",
  album: "Familiar Drugs",
  rating: 5,
  trackLength: 258
});

const otherTestTrack = new Track({
  title: "Old Crows",
  artist: "Alexisonfire",
  album: "Old Crows/Young Cardinals",
  rating: 4,
  trackLength:  257
})

test.addTrackToPlaylist({
  track: testTrack,
  playlistName: "My first Playlist"
});

test.addTrackToPlaylist({
  track: otherTestTrack,
  playlistName: "my first playlist"
})

test.getPlaylist("my first playlist", (playlist) => {
  console.log("Playlist Rating: ", playlist.overallRating);
  console.log("Total playlist runtime (in seconds): ", playlist.totalDuration)
  console.log("Total playlist runtime (formatted to hh:mm:ss): ", playlist.formattedDuration)
})
