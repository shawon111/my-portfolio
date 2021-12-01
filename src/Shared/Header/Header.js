import React from 'react';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return (
        <header style={{marginBottom: '40px', backgroundColor:'var(--darkSecondary)'}}>
                <div className="header-container d-flex align-items-center">
                    <div className="menu w-50"><Navigation></Navigation></div>
                    <div className="download-resume w-50 text-end">
                        <button className="download-resume-btn brand-btn"><a className="text-decoration-none text-white fs-6" href="https://drive.google.com/file/d/1Qdk-cpGmyvW1T1W-Ylo2YmHSvSHlpA3U/view" target="_blank" rel="noreferrer">download resume</a></button>
                    </div>
                </div>
        </header>
    );
};

export default Header;