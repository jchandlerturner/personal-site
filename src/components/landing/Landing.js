import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom"
import './Landing.css'

export default class Landing extends Component {
    render() {
        return (
            <>
                <section className="contentBody">
                    <div className="landingTitle">
                        <h1 className="heading">Hi, I'm Chandler, a <mark>Product Designer</mark> based in Nashville, TN.</h1>
                    </div>


                    <div className="skillsEmoji">
                        <div className="skillDiv">
                            <img id="image-10" src={require('./5a9d519aa2f0dc0001b69e9e_012-idea-1.png')} alt="Winedown Logo" />
                            <h1 className="headingSkills">Front End Dev</h1>
                        </div>
                        <div className="skillDiv">
                            <img id="image-10" src={require('./5a9d5198a5e9fa00010d1035_004-sketching.png')} alt="Winedown Logo" />
                            <h1 className="headingSkills">UI Design</h1>
                        </div>
                        <div className="skillDiv">
                            <img id="image-10" src={require('./5a9d519aa5e9fa00010d103a_011-idea.png')} alt="Winedown Logo" />
                            <h1 className="headingSkills">User Research</h1>
                        </div>
                        <div className="skillDiv">
                            <img id="image-10" src={require('./5a9d5198dcda0a0001b0aeb2_005-responsive.png')}alt="Winedown Logo" />
                            <h1 className="headingSkills">Prototyping</h1>
                        </div>
                        <div className="skillDiv">
                            <img id="image-10" src={require('./5a9d5199a5e9fa00010d1038_008-view.png')}alt="Winedown Logo" />
                            <h1 className="headingSkills">Usability Testing</h1>
                        </div>
                        <div className="skillDiv">
                            <img id="image-10" src={require('./5a9d5199dcda0a0001b0aeb3_006-3d.png')}alt="Winedown Logo" />
                            <h1 className="headingSkills">Interaction Design</h1>
                        </div>
                    </div>

                    <section className="capstone">
                        <div className="capstoneLeft">
                            {/* <img id="winedownlogo" src={require('./simpleLogo-01.png')} alt="Winedown Logo" /> */}
                            <p className="headingPiece">Front End Development Capstone</p>
                            <a className="case-link" href="/winedown">See More</a>
                        </div>
                        <div className="capstoneRight">
                            <img id="winedownHome" src={require('./capstoneRight-01.png')} alt="Winedown Logo" />
                        </div>
                    </section>

                    <section className="dailyUi">
                        <p>dailyUi</p>
                    </section>

                    <section className="bangazon">
                        <p>bangazon</p>
                    </section>
                </section>
            </>
        )
    }
}