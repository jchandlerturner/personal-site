import React, { Component } from "react";
import './Winedown.css'

export default class Winedown extends Component {
    render() {
        return (
            <>
                <section className="titleImage">
                    <img id="workHeader" src={require('./simpleLogo-01.png')} alt="Winedown Logo" />
                    <h3 className="workTitle">Front End Capstone</h3>
                </section>
                <section className="descriptorOne">
                    <div className="bodyText">
                        <h3 className="headingx">Problem</h3>
                        <p>Often, people forget which wines they’ve tried and what they thought of it, which can make it difficult when purchasing wine. Along with this, restaurant workers tend to not have a convenient place aside from pieces of paper, that they can keep their wine notes to stay up to date on ever-changing wine lists.
                        <br></br>
                            <br></br>
                            How can we help wine lovers and restaurant staff track, rate, and favorite wine tastings with on-the-go access? </p>
                    </div>
                    <div className="projectSpecs">
                        <hr></hr>
                        <h3 className="headingx">Involvement</h3>
                        <p>UX Designer & Front End Developer</p>
                        <h3 className="headingx">Timeline</h3>
                        <p>October 2019 | 80 hours over 2 weeks</p>
                    </div>
                </section>
                <section>
                    <div className="bodyText">
                        <h3 className="headingx">Background</h3>
                        <p>The idea for this project came from my time working in the restaurant industry. More often than not, servers and bartenders keep their wine notes on separate pieces of paper that they can't keep track of. </p>
                    </div>
                </section>
                <section>
                    <div className="bodyText">
                        <h3 className="headingx">User Research</h3>
                        <p>Before starting my capstone proposal, I asked my coworkers in the restaurant industry what they would be looking for in a simple wine notes app. They all agreed that they would want: <br></br>
                            <br></br>
                            👨‍🎨 A minimal and simple interface
                            <br></br>
                            🍷 Ability to track name, varietal, price, type, and tasting notes
                            <br></br>
                            📩 Ability to share wines with friends
                            </p>
                    </div>
                </section>
                <section>
                    <div className="bodyText">
                        <h3 className="headingx">User Persona</h3>
                        <p>Based off of my research from my coworkers I came up with this persona:</p>
                        <img id="persona" src={require('./wDpersona2-01.png')} alt="Bartender Persona" />
                        {/* <br></br>
                        <br></br>
                        <img id="persona" src={require('./wD-persona-01.png')} alt="Millenial Persona" /> */}
                    </div>
                </section>
                <section>
                    <div className="sketchDiv">
                        <h3 className="headingx">Sketches & Wireframes</h3>
                        <p className="bodyText">After my research and talking to potential users, it was time to rough sketch my app. I'd never sketched an app ideation before, but was excited to tackle the challenge!</p>
                        <img id="sketch" src={require('./wireframe1.jpg')} alt="Bartender Persona" />
                        <img id="sketch" src={require('./wireframe2.jpg')} alt="Bartender Persona" />
                        <img id="sketch" src={require('./wireframe3.jpg')} alt="Bartender Persona" />
                        {/* <br></br>
                        <br></br>
                        <img id="persona" src={require('./wD-persona-01.png')} alt="Millenial Persona" /> */}
                    </div>
                </section>
            </>
        )
    }
}