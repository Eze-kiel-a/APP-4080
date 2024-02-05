import React,{useState,useEffect} from 'react'
import './StopWatch.css'

function StopWatch(){

    const [millisecond, setMillisecond] = useState(0)
    const [second,setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)



    return(
        <div className = "stop-watch-container">
            <div className = "hours-minutes-seconds-container">
                <p>
                    {hour}:{minute.toString().padStart(2, "0")}:
                    {second.toString().padStart(2, "0")}.
                    <span className='milliseconds'>{millisecond.toString().padStart(2, "0")}</span>
                </p>
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