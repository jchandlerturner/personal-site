import React, { Component } from "react";
import './About.css'


export default class About extends Component {
    render() {
        return (
            <>
                <section id="headerContactWrapper">
                    <div className="aboutImage">
                        <p> </p>
                    </div>

                    <div id="contactWrapper">
                        <div className="contact">
                            <a className="emailLink" href="https://www.example.com">Email</a>
                        </div>
                        <div className="contact">
                            <a className="dribbbleLink" href="https://www.example.com">Dribbble</a>
                        </div>
                        <div className="contact">
                            <a className="linkedinLink" href="https://www.example.com">LinkedIn</a>
                        </div>
                        <div className="contact">
                            <a className="twitterLink" href="https://www.example.com">Twitter</a>
                        </div>
                        <div className="contact">
                            <a className="resumeLink" href="https://www.example.com">Resume</a>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}