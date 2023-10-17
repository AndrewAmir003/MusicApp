import React, { useState } from "react";
import { ArtistInfo, LikedSongs, UserAddSongForm, SongList, SongItem  } from "./components/index"

export default function App() {
  const [inputText, setInputText] = useState("")
  const [likedSongs, setLikedSongs] = useState([]);
  const [songName, setSongName] = useState([]);

    return (
        <>
          <ArtistInfo />
          <LikedSongs 
          likedSongs={likedSongs} 
          setLikedSongs={setLikedSongs}
          />
          <UserAddSongForm 
          inputText={inputText} 
          setInputText={setInputText} 
          songName={songName} 
          setSongName={setSongName}/>
          <SongList 
          songName={songName} 
          setSongName={setSongName}/>
        </>
    )
}
