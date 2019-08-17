import React from 'react'
import PlaylistHeader from '../PlaylistHeader'
import PlaylistItems from '../containers/PlaylistItems'

// Styling
import NightMode from '../Nightmode'
import StylePlaylist from '../styles/StyledPlaylist'

const Playlist = props => {
    return (
        <StylePlaylist>
           <NightMode />
           <PlaylistHeader />
           <PlaylistItems />
        </StylePlaylist>
    )
}

export default Playlist