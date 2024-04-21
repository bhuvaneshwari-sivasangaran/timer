// Home.js
// Vishnu Karthik Maniyara

import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Home = () => {
    return (
        <>
            <Header /> {/* Rendering the Header component */}
            <div className="container home-container">
                <div className="banner">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Time concept"
                    />
                </div>

                <div className="content">
                    <h1 className="text-center title">
                        Welcome to Our Timer App
                    </h1>
                    <p>
                        This application offers a fast and seamless experience,
                        providing users with a smooth timer functionality that
                        can be utilized as a stopwatch. With its intuitive
                        interface and responsive design, it ensures efficient
                        time tracking and management, making it an ideal choice
                        for various timing needs.
                    </p>
                    <p>
                        Experience the convenience of our timer application,
                        renowned for its speed and reliability. Whether you need
                        to track time for workouts, meetings, or daily tasks,
                        our application delivers a seamless experience, ensuring
                        precise timing and effortless usability. Say goodbye to
                        clunky interfaces and embrace the efficiency of our
                        smooth-running stopwatch.
                    </p>
                </div>

                {/* Benefits Section */}
                <div className="benefits">
                    <div className="benefit-card">
                        <h3 className="title">Improved Productivity</h3>
                        <p>
                            Efficient time management leads to enhanced
                            productivity and better task organization. With our
                            timer app, you can streamline your workflow and
                            accomplish tasks more effectively.
                        </p>
                    </div>
                    <div className="benefit-card">
                        <h3 className="title">Enhanced Focus</h3>
                        <p>
                            By using our timer as a stopwatch, you can maintain
                            focus and concentration on specific tasks or
                            activities. It helps eliminate distractions and
                            promotes a more productive work environment.
                        </p>
                    </div>
                </div>
            </div>
            <Footer /> {/* Rendering the Footer component */}
        </>
    );
};

export default Home;
