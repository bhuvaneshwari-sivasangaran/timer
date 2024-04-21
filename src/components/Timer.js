// Timer.js
// Bhuvaneshwari Sivasangaran - 8882803

import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Timer = () => {

    // State variables for timer functionality
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    // Effect to handle timer interval
    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    // Function to start the timer
    const startTimer = () => {
        setIsRunning(true);
    };

    // Function to stop the timer
    const stopTimer = () => {
        setIsRunning(false);
    };

    // Function to reset the timer
    const resetTimer = () => {
        setTime(0);
        setIsRunning(false);
    };

    // Function to format timestamp
    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        const formattedHours = String(hours).padStart(2, "0");
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <>
            <Header /> {/* Rendering the Header component */}
            <div className="timer-container">
                {/* Timer Display */}
                <div className="timer-display">{formatTime(time)}</div>
                {/* Timer Controls - start, stop and reset */}
                <div className="timer-controls">
                    {!isRunning ? (
                        <button onClick={startTimer} className="start-button">
                            Start
                        </button>
                    ) : (
                        <button onClick={stopTimer} className="stop-button">
                            Stop
                        </button>
                    )}
                    <button onClick={resetTimer} className="reset-button">
                        Reset
                    </button>
                </div>
            </div>
            <Footer /> {/* Rendering the Footer component */}
        </>
    );
};

export default Timer;
