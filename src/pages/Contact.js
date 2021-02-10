import Navigation from "../layouts/Navigation";
import React from 'react';

class Contact extends React.Component{
    render() {
        return (
            <div className="content-wrapper">
                <Navigation isMobile = {this.props.isMobile}/>
            </div>
        );
    }
}

export default Contact;
