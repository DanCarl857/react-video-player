import React from 'react'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../containers/PlaylistItems'

// Styling
import NightMode from '../Nightmode'
import StylePlaylist from '../styles/StyledPlaylist'

const Playlist = ({ videos, active, nightModeCallback, nightMode }) => {
    return (
        <StylePlaylist>
           <NightMode nightModeCallback={nightModeCallback} nightMode={nightMode} />
           <PlaylistHeader active={active} total={videos.length} />
           <PlaylistItems videos={videos} active={active} />
        </StylePlaylist>
    )
}

export default Playlist