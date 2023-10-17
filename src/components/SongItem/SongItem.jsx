import React, { useState } from "react"

export default function SongItem({song}) {

    return (
        <>
        <li>
            <span>
                {song.text}
            </span>
        </li>
        </>
    ) 
}
