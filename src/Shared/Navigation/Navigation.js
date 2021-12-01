import { faAddressCard, faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    
    return (
        <div className="navigation-menu">
            <nav>
                <ul>
                    <li className="navigation-link"><span className="link-icon"><FontAwesomeIcon icon={faHome} /></span><Link to="/">Home</Link></li>
                    <li className="navigation-link"><span className="link-icon"><FontAwesomeIcon icon={faAddressCard} /></span><a href="#about">About Me</a></li>
                    <li className="navigation-link"><span className="link-icon"><FontAwesomeIcon icon={faBriefcase} /></span><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;