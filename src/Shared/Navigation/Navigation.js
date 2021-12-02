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
                    <li className="navigation-link"><Link to="/">Home</Link></li>
                    <li className="navigation-link"><a href="#about">About Me</a></li>
                    <li className="navigation-link"><Link to="/projects">Projects</Link></li>
                    <li className="navigation-link"><Link to="/blogs">Blogs</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;