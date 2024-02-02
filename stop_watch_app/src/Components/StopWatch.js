import React,{useState,useEffect} from 'react'
import './StopWatch.css'

function StopWatch(){

    const [time,setTime] = useState(0)


    return(
        <div className = "stop-watch-container">
            <div className = "hours-minutes-seconds-container">
                <h1>
                    00:00:00
                </h1>
            </div>
            <div className = "button-container">
                <button className = "start-button" >Start</button>
                <button className = "stop-button">Stop</button>
                <button className ="reset-button">Reset</button>
            </div>
            
        </div>
    )
}

export default StopWatch;