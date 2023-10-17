import React, { useState } from "react";

export default function UserAddSongForm({inputText, setInputText, songName, setSongName}) {
    const handleInput = (e) => {
        setInputText(e.target.value)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSongName([
            ...songName,
            {text: inputText, liked: false}
        ])
        setInputText("")
    }  

    return (
        <>
        <header>Add a song</header>
        <form onSubmit={handleSubmit}>
          <input value={inputText} type="text" onChange={handleInput}/> 
          <button type="submit">Add A Song</button>
        </form>
        </>
    )
}
