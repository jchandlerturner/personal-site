import React, { Component } from "react";
import './Winedown.css'

export default class Winedown extends Component {
    render() {
        return (
            <>
                <section className="titleImage">
                    <img id="workHeader" src={require('./winedownHeader-01.png')} alt="Winedown Logo" />
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
                    <div className="imageText">
                        <h3 className="headingx">Sketches & Wireframes</h3>
                    </div>
                    <p className="sketchP">After my research and talking to potential users, it was time to rough sketch my app. I'd never sketched an app ideation before, but was excited to tackle the challenge!</p>
                    <div className="imageText">
                        <img id="sketch" src={require('./wireframe1.jpg')} alt="Bartender Persona" />
                        <img id="sketch" src={require('./wireframe2.jpg')} alt="Bartender Persona" />
                        <img id="sketch" src={require('./wireframe3.jpg')} alt="Bartender Persona" />
                        {/* <br></br>
                        <br></br>
                        <img id="persona" src={require('./wD-persona-01.png')} alt="Millenial Persona" /> */}
                    </div>
                </section>
                <section>
                    <div className="bodyText">
                        <h3 className="headingx">Testing</h3>
                        <p>I refined the UX & UI through testing with multiple classmates and coworkers in the restaurant industry. Based on feedback I got from multiple users, I decided to change the value of "location" on the cards to simplify the UX since most bartenders or servers wouldn't necessarily care about the location the wine was purchased at. 
                        <br></br>
                        <br></br>I was also intent on building a social function for the app, but in user testing most people saw this app as most helpful as just a simple wine journal instead of a social platform. 
                       </p>
                        {/* <br></br>
                        <br></br>
                        <img id="persona" src={require('./wD-persona-01.png')} alt="Millenial Persona" /> */}
                    </div>
                </section>
                <section>
                    <div className="bodyText">
                        <h3 className="headingx">Key Takeaways and Learnings</h3>
                        <p>This project was my first app I'd ever coded and taken all the way from ideation to development. Overcoming imposter syndrome was a huge part of this project, and I'm proud to have come out on the other side!
                        <br></br>
                        <br></br>
                        Originally, I had a different idea of what this app would be—I imagined it would be more of a social platform to share wine with friends, but as I started talking to coworkers I noticed that there was a specific problem I could tackle. After user testing, a few features I thought were "key" (plot twist: they were not) became obsolete and this app became simpler and more effective!
                        <br></br>
                        <br></br>
                        During talks with UX professionals, I got solid feedback on the UI of winedown such as; making the cards wider to give more margin and breathing room and also to consult Apple's Human Interface Guidelines (HIG) about tappable buttons and areas.
                        <br></br>
                        <br></br>
                        In Version 2.0, I'd like to:
                        <br></br>
                        👇Update buttons and areas to follow HIG

                       </p>
                        {/* <br></br>
                        <br></br>
                        <img id="persona" src={require('./wD-persona-01.png')} alt="Millenial Persona" /> */}
                    </div>
                </section>
            </>
        )
    }
}