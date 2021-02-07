import Navigation from "../layouts/Navigation";
import Typewriter from "../components/Typewriter";
import { Redirect } from "react-router-dom";
import React from 'react';

class LandingPage extends React.Component{
    state = {
        redirect: false,
    }


    render() {
        return (
            <div className="container">
                <Navigation isMobile = {this.props.isMobile}/>
                <div className="bounds">
                    <Typewriter list={this.props.displayText} defaultMessage={this.props.defaultText}/>
                </div>
                <div className="button-container">
                    <button onClick={() => this.setState({redirect: true})}> Let's Talk</button>
                </div>
                {this.state.redirect && <Redirect to="/home"/>}
            </div>
        );
    }
}

LandingPage.defaultProps = {
    isMobile: false,
    displayText: [
        " Rylan.",
        " a web-developer.",
        " creative-minded.",
        " a software-engineering student.",
        " goal-oriented.",
        " a natural-born leader.",
        " happy to meet you."
    ],
    defaultText: "Hi, I'm"
}

export default LandingPage;