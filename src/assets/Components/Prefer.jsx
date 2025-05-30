import { useSelector, useDispatch } from "react-redux";

import { selectSong, toggleLike } from "../redux/action";

const Prefer = () => {
  const songs = useSelector((state) => state.results);
  const likedSongs = useSelector((state) => state.likedSongs);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Results</h2>
      <div className="d-flex flex-wrap">
        {songs.map((song) => (
          <div key={song.id} className="m-2" style={{ cursor: "pointer", width: "200px" }} onClick={() => dispatch(selectSong(song))}>
            <img src={song.album.cover_medium} alt={song.title} width="100%" />
            <div>{song.title}</div>
            <div>{song.artist.name}</div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(toggleLike(song.id));
              }}
            >
              {likedSongs.includes(song.id) ? "💚" : "🤍"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prefer;
