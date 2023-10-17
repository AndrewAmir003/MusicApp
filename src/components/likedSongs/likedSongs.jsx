import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function likedSongs({likedSongs, setLikedSongs}) {

  const toggleLike = (songName) => {
    setLikedSongs((prevState) => ({
      ...prevState,
      [songName]: !prevState[songName],
    }));
  };

  const isLiked = (songName) => likedSongs[songName];

  const songs = [
    {
      name: "Galway Girl",
      releaseDate: "17-03-2017",
      coverArt: "../Public/EdSheeranGG.jpg",
    },
    {
      name: "Shape of you",
      releaseDate: "06-01-2017",
      coverArt: "../Public/ShapeOfYou.png",
    },
    {
      name: "Shivers",
      releaseDate: "10-09-2021",
      coverArt: "../Public/shivers.png",
    },
  ];

  return (
    <>
      <h2>Songs/Albums</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.name}>
            <img src={song.coverArt} alt={song.name} />
            <p>{song.name}</p>
            <p>{song.releaseDate}</p>
            <button onClick={() => toggleLike(song.name)}>
              <FontAwesomeIcon
                icon={isLiked(song.name) ? faThumbsDown : faThumbsUp}
                style={{ color: isLiked(song.name) ? "red" : "gray" }}
              />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
