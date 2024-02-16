import React,{useState,useEffect} from 'react'
import './StopWatch.css'

function StopWatch(){

    // const [time, setTime] = useState()
    const [time, setTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    // method to reset the stopwatch:
    const reset = () =>{
        setTime(0);
    };

    // method to calculate time

    useEffect(() => {
        let intervalId;
        if (isRunning) {
          // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
          intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
      }, [isRunning, time]);

      // Hours calculation
    const hour = Math.floor(time / 360000);

    // Minutes calculation
    const minute = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const second = Math.floor((time % 6000) / 100);

    // Milliseconds calculation
    const millisecond = time % 100;

    // Method to start and stop timer
    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    

    return(
        <div className = "stop-watch-container">
            <div className = "hours-minutes-seconds-container">
                <p>
                    {hour.toString().padStart(2, "0")}:
                    {minute.toString().padStart(2, "0")}:
                    {second.toString().padStart(2, "0")}.
                    <span className='milliseconds'>{millisecond.toString().padStart(2, "0")}</span>
                </p>
            </div>
            <div className = "button-container">
                <button className = "start-button" onClick={startTimer}>Start</button>
                <button className = "stop-button" onClick={stopTimer}>Stop</button>
                <button className ="reset-button" onClick={reset}>Reset</button>
            </div>

        </div>
    )
}

export default StopWatch;