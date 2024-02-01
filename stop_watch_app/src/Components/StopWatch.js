import React from 'react'
import './StopWatch.css'

function StopWatch(){
    return(
        <div className = "stop-watch-container">
            <button className = "start-button">Start</button>
            <button className ="reset-button">Reset</button>
        </div>
    )
}

export default StopWatch;