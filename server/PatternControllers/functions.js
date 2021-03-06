module.exports.getAllTracks = (userTracks) => {
  allTracks = [];
  trackMap = {};

  for (let user in userTracks) {
    userTracks[user].map((track) => {
      if (!trackMap[track.uri]) {
        allTracks.push(track);
        trackMap[track.uri] = 1;
      } else trackMap[track.uri]++;
    });
  }
  return [allTracks, trackMap];
};

module.exports.sortTracksOnPopularity = (userTracks) => {
  for (let user in userTracks) {
    let trackList = userTracks[user].sort(
      (a, b) => b.popularity - a.popularity
    );
    userTracks[user] = trackList;
  }
  return userTracks;
};

module.exports.sortTracksBy_Frequency_Popularity = (allTracks) => {
  allTracks.sort((a, b) => {
    return a.frequency === b.frequency
      ? b.popularity - a.popularity
      : b.frequency - a.frequency;
  });

  return allTracks;
};
