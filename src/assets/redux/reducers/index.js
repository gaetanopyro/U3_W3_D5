import { ADD_MUSIC, LIKE_SONG, SET_SONG } from "../action";

const initialState = {
  results: [],
  selectedSong: null,
  likedSongs: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MUSIC:
      return { ...state, results: action.payload };
    case SET_SONG:
      return { ...state, selectedSong: action.payload };
    case LIKE_SONG:
      return {
        ...state,
        likedSongs: state.likedSongs.includes(action.payload) ? state.likedSongs.filter((id) => id !== action.payload) : [...state.likedSongs, action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
