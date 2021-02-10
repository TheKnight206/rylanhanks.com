import Navigation from "../layouts/Navigation";
import React from 'react';

class About extends React.Component{
    render() {
        return (
            <div className="content-wrapper">
                <Navigation isMobile = {this.props.isMobile}/>
            </div>
        );
    }
}

export default About;
