import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header style={{marginBottom: '40px'}}>
                <div className="header-container d-flex align-items-center">
                    <div className="menu w-50"><Navigation></Navigation></div>
                    <div className="download-resume w-50 text-end">
                        <button className="download-resume-btn brand-btn">download resume</button>
                    </div>
                </div>
        </header>
    );
};

export default Header;