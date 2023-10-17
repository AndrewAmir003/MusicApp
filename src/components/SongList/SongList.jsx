import React, { useState } from "react"

import SongItem from "../SongItem/SongItem"

export default function SongList({songName}) {

    return (
        <>
            <div>
                <ul>
                    {songName.map((song, i) => <SongItem song={song} 
                    key={i}/>)}
                </ul>
            </div>
        </>
    )
}
