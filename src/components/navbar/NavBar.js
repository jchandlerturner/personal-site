import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavigationBar extends Component {

    render() {
        return (
            <>
                {/* <ul>
                    <li><Link className="home" to="/">Home</Link></li>
                    <li><Link className="portfolio" to="/portfolio">Portfolio</Link></li>
                    <li><Link className="about" to="/about">About</Link></li>
                    <li><Link className="resume" to="/resume">Resume</Link></li>
                    <li><Link className="contact" to="/contact">Contact</Link></li>
                </ul> */}
                <nav>
                    <div className="logoContainer">
                        <img id="logo" onClick={() => { this.props.history.push("/") }} src={require('./logo.png')} alt="Winedown Logo" />
                    </div>

                    
                        <ul className="container">
                            <li><Link className="nav-link" to="/portfolio">Work</Link></li>
                            <li><Link className="nav-link" to="/about">About</Link></li>
                            {/* <li><Link className="nav-link" to="/contact">Contact</Link></li> */}
                        </ul>
                </nav>
            </>

        );
    }
}

export default withRouter(NavigationBar);