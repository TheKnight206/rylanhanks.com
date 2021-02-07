import '../css/Navigation.css';
import React from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";

class Navigation extends React.Component {
    render () {
        if (!this.props.isMobile) {
            return (
                <Router>
                    <nav className="Container">
                        <ul className="Links">
                            <li className="Link">
                                <NavLink to="/home" activeClassName="active"> Home </NavLink>
                            </li>

                            <li className="Link">
                                <NavLink to="/about" activeClassName="active"> About </NavLink>
                            </li>

                            <li className="Link">
                                <NavLink to="/projects" activeClassName="active"> Projects </NavLink>
                            </li>

                            <li className="Link">
                                <NavLink to="/contact" activeClassName="active"> Contact Me </NavLink>
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