import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header style={{marginBottom: '40px'}}>
                <div className="header-container d-flex">
                    <div className="logo w-50"></div>
                    <div className="download-resume w-50 text-end">
                        <button className="download-resume-btn brand-btn">download resume</button>
                    </div>
                </div>
        </header>
    );
};

export default Header;