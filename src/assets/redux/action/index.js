export const ADD_MUSIC = "ADD_MUSIC";
export const SET_SONG = "SET_SONG";
export const LIKE_SONG = "LIKE_SONG";

export const setMusic = (songs) => ({
  type: ADD_MUSIC,
  payload: songs,
});

export const selectSong = (song) => ({
  type: SET_SONG,
  payload: song,
});

export const toggleLike = (songId) => ({
  type: LIKE_SONG,
  payload: songId,
});
