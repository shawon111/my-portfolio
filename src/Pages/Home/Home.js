import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import './Home.css';
import shawon from '../../images/shawon-ahmmed.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <div style={{ background: 'var(--darkPrimary)' }}>
            <section className="home-banner">
                <Container>
                    <Header></Header>
                    <div className="information d-flex align-items-center justify-content-center">
                        <div className="info-texts w-50">
                            <h4 className="brand-color-text">I'm</h4>
                            <h1 className="text-white">Shawon<br /> Ahmmed</h1>
                            <p>A passionate and hard-working junior front-end web developer</p>
                            <div className="social-links">
                                <span className="social-item">
                                    <a href="https://www.facebook.com/shawon.ahmmed.31586" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                                </span>
                                <span className="social-item">
                                    <a href="https://twitter.com/ShawonAhmmed14" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                                </span>
                                <span className="social-item">
                                    <a href="https://www.linkedin.com/in/shawon-ahmmed-987a68226/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                </span>
                                <span className="social-item">
                                    <a href="https://github.com/shawon111" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                                </span>
                            </div>
                        </div>
                        <div className="my-image w-50">
                            <div style={{ position: 'relative' }} className="image-contents">
                                <img src={shawon} alt="shawon ahmmed" />
                                <span className="first anim_translate" style={{ position: 'absolute' }}></span>
                                <span className="second anim_left2" style={{ position: 'absolute' }}></span>
                                <span className="third anim_right2" style={{ position: 'absolute' }}></span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;