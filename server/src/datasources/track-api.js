// https://odyssey.apollographql.com/lift-off-part2/implementing-our-restdatasource

const { RESTDataSource } = require("apollo-datasource-rest");

class TrackAPI extends RESTDataSource {
  constructor() {
    super(); // make sure we get access to our REST database features
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome() {
    return this.get("tracks"); // get request to the 'tracks' endpoint
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }
}

module.exports = TrackAPI;
