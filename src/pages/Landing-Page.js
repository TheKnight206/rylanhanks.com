import Typewriter from "../components/Typewriter";
import { Redirect } from "react-router-dom";
import React from 'react';
import "../css/Landing-Page.css";

class LandingPage extends React.Component{
    state = {
        redirect: false,
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="page-content">
                    <div className="bounds">
                        <Typewriter list={this.props.displayText} defaultMessage={this.props.defaultText}/>
                    </div>
                    <div className="button-container">
                        <button onClick={() => this.setState({redirect: true})}> Let's Talk</button>
                    </div>
                </div>
                {this.state.redirect && <Redirect to="/contact"/>}
            </div>
        );
    }
}

LandingPage.defaultProps = {
    displayText: [
        " Rylan.",
        " a web-developer.",
        " creative-minded.",
        " a software-engineering student.",
        " goal-oriented.",
        " a leader.",
        " happy to meet you."
    ],
    defaultText: "Hi, I'm"
}

export default LandingPage;
