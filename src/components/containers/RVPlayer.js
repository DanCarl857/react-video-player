import React from 'react'
import Video from '../Video'
import Playlist from '../containers/Playlist'

const RVPlayer = props => {
    return (
        <React.Fragment>
            <Video />
            <Playlist />
        </React.Fragment>
    )
}

export default RVPlayer