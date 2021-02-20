import React from 'react';
import ProfilePicture from '../Images/ProfilePicture.jpg';
import '../css/About.css';

class About extends React.Component{

    render() {
        return (
            <div className="content-wrapper">
                <div className="profile-picture">
                    <img src={ProfilePicture} alt="Rylan Hanks (Portrait)"/>
                </div>
                <section className="about-text-wrapper">
                    <h2> Hi, I'm Rylan. </h2>
                    <p> Self-driven, adaptable, always learning, are just a few of the words one could use to describe me. A student at heart, I'm always passionate about rising to the occasion, learning new skills, and contributing my expertise when available. Leveraging this passion, I make an excellent addition to any team: providing a member with the drive to deliver cutting-edge excellence. </p>
                    <p> A recent high school grad, I'm entering the U.T. Cockrell School of Engineering as part of the prestigious honors program along with an Associates degree already under my belt. While it may seem that my software experience would reflect that of an incoming college undergraduate, this couldn't be further from the truth. Years of self study, independent projects, and tutoring have honed my skillset beyond one's expectations. </p>
                </section>
            </div>
        );
    }
}

export default About;
