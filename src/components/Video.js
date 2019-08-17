import React from 'react'
import ReactPlayer from 'react-player'

// Styling
import StyledVideoWrapper from './styles/StyledVideoWrapper'
import StyledVideo from './styles/StyledVideo'
import { isAbsolute } from 'path';

const Video = ({ active, autoplay, endCallback, progressCallback }) => (
    <StyledVideo>
        <StyledVideoWrapper>
            <ReactPlayer
                width="100%"
                height="100%"
                style={{ position: isAbsolute, top: 0 }}
                playing={autoplay}
                controls
                url={active.video}
                onEnded={endCallback}
                onProgress={progressCallback}
            />
        </StyledVideoWrapper>
    </StyledVideo>
)

export default Video