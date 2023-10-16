import React, { useState } from 'react';

export default function SongList() {
  const [likedSongs, setLikedSongs] = useState({});

  const toggleLike = (songName) => {
    setLikedSongs((prevLikedSongs) => ({
      ...prevLikedSongs,
      [songName]: !prevLikedSongs[songName],
    }));
  };

  const isLiked = (songName) => likedSongs[songName];

  const songs = [
    { name: 'Galway Girl', releaseDate: '17-03-2017', coverArt: '../images/EdSheeranGG.jpg' },
    { name: 'Shape of you', releaseDate: '06-01-2017', coverArt: '../images/ShapeOfYou.png' },
    { name: 'Shivers', releaseDate: '10-09-2021', coverArt: '../images/shivers.png'}];

  return (
    <div>
      <h2>Songs/Albums</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.name}>
            <img src={song.coverArt} alt={song.name} />
            <p>{song.name}</p>
            <p>{song.releaseDate}</p>
            <button onClick={() => toggleLike(song.name)}>
              {isLiked(song.name) ? 'Unlike' : 'Like'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


