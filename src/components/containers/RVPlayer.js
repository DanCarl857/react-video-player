import React from 'react'
import Video from '../Video'
import Playlist from '../containers/Playlist'

// Styling
import { ThemeProvider } from 'styled-components'
import StyledRVPlayer from '../styles/StyledRVPlayer'

const theme = {
    bgcolor: "#353535",
    bgcolorItem: "#414141",
    bgcolorItemActive: "#405c63",
    bgcolorPlayed: "#526d4e",
    border: "none",
    borderPlayed: "none",
    color: "#fff",
}

const themeLight = {
    bgcolor: "#fff",
    bgcolorItem: "#fff",
    bgcolorItemActive: "#80a7b1",
    bgcolorPlayed: "#7d9979",
    border: "1px solid #353535",
    borderPlayed: "none",
    color: "#353535",
}

const RVPlayer = props => {
    return (
        <ThemeProvider theme={state.nightMode ? theme : themeLight }>
            <StyledRVPlayer>
                <Video />
                <Playlist />
            </StyledRVPlayer>
        </ThemeProvider>
    )
}

export default RVPlayer