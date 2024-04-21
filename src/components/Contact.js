// Contact.js
// Ranjitha Chakkassari Raveendran

import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Contact = () => {
    return (
        <>
            <Header /> {/* Rendering the Header component */}
            <div className="container m-5">
                <h1 className="title">Founders</h1>
                <div className="founders">
                    {/* Founder Cards */}
                    <div className="founder-card">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Founder 1"
                            className="founder-image"
                        />
                        <h3 className="founder-name">John Doe</h3>
                        <p className="founder-position">CEO</p>
                    </div>
                    <div className="founder-card">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Founder 2"
                            className="founder-image"
                        />
                        <h3 className="founder-name">Jane Smith</h3>
                        <p className="founder-position">CTO</p>
                    </div>
                    <div className="founder-card">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Founder 3"
                            className="founder-image"
                        />
                        <h3 className="founder-name">Michael Johnson</h3>
                        <p className="founder-position">CFO</p>
                    </div>
                    <div className="founder-card">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Founder 4"
                            className="founder-image"
                        />
                        <h3 className="founder-name">Emily Davis</h3>
                        <p className="founder-position">COO</p>
                    </div>
                </div>

                 {/* Contact Form */}
                <div className="contact-form">
                    <h1 className="title text-center">Mail Us</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer /> {/* Rendering the Footer component */}
        </>
    );
};

export default Contact;
