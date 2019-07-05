class Track {
  constructor({title, artist, album, rating, trackLength}){
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.rating = rating;
    this.trackLength = trackLength;
  }

  get string() {
    return JSON.stringify(this);
  }

  get prettyString() {
    return JSON.stringify(this, null, 2);
  }
}

module.exports = Track;