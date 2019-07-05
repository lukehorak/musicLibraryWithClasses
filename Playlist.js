const Track = require('./Track');

class Playlist {
  constructor( name ) {
    this.name = name;
    this.tracks = [];
  }

  get string() {
    return JSON.stringify(this);
  }

  get prettyString() {
    return JSON.stringify(this, null, 2);
  }

  get numberOfTracks() {
    return this.tracks.length;
  }

  get overallRating() {
    // average ratings of tracks
    let rating = 0;
    this.tracks.forEach(track => {
      rating += track.rating;
    })
    return (this.numberOfTracks > 0 ? rating / this.numberOfTracks : 'There are no tracks in this Playlist!' );
  }

  get totalDuration() {
    let duration = 0;
    this.tracks.forEach(track => {
      duration += track.trackLength;
    })
    return duration
  }

  get formattedDuration() {
    let duration = this.totalDuration;
    let date = new Date(duration * 1000);
    return date.toISOString().substr(11, 8)
    //return (new Date()).clearTime().addSeconds(duration).toString('H:mm:ss')
  }

  addTrack(track) {
    if (Track.prototype === track.__proto__){
      this.tracks.push(track);
      console.log(`'${track.title}' by ${track.artist} has been added to playlist '${this.name}'`)
    }
    else{
      console.log("I can't push something that's not a track")
    }
  }
}

module.exports = Playlist;