import React from 'react'

// Styling
import StyledNightmode from './styles/StyledNightmode'

const NightMode = ({ nightModeCallback, nightmode}) => {
    return (
        <StyledNightmode>
           <span>NightMode: </span>
           <label className="switch">
               <input type="checkbox" checked={nightmode} onChange={nightModeCallback} />
               <span className="slider round" />
           </label>
        </StyledNightmode>
    )
}

export default NightMode