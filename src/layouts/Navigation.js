import '../css/Navigation.css';
import React from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";

class Navigation extends React.Component {
    render () {
        if (!this.props.isMobile) {
            return (
                <Router>
                    <nav>
                        <ul className="links">
                            <li className="link">
                                <NavLink exact to="/" activeClassName="active" className="link-text"> Home </NavLink>
                            </li>

                            <li className="link">
                                <NavLink to="/about" activeClassName="active" className="link-text"> About </NavLink>
                            </li>

                            <li className="link">
                                <NavLink to="/projects" activeClassName="active" className="link-text"> Projects </NavLink>
                            </li>

                            <li className="link">
                                <NavLink to="/contact" activeClassName="active" className="link-text"> Contact Me </NavLink>
                            </li>
                        </ul>
                    </nav>
                </Router>
            );
        } else {
            return (
                <div>

                </div>
            )
        }
    }
}

Navigation.defaultProps = {
    isMobile: false,
}

export default Navigation;