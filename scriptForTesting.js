const Track = require('./Track');
const Library = require('./MusicLibrary');

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
