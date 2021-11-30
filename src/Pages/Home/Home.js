import React from 'react';
import { Container, Form } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import './Home.css';
import shawon from '../../images/shawon-ahmmed.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import camtech from '../../images/camtech.jpg';
import gogo from '../../images/gogotravels.jpg';
import heartcare from '../../images/heartcare.jpg';
import academy from '../../images/amaderacademy.jpg';
import SingleProject from './SingleProject/SingleProject';
import emailjs from 'emailjs-com';
import Button from '@restart/ui/esm/Button';
import useProjects from '../../hooks/useProjects';

const Home = () => {
    const [projects] = useProjects();
    //send email
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_4geluyd', 'template_5az2bgo', e.target, 'user_l0boe73dQyv5QM4AN67Tl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

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
            <section className="portfolio">
                <Container>
                    <h1 className="section-heading text-white mb-5">My Projects</h1>
                    <div className="my-project-container">
                        {
                            projects?.map(project => <SingleProject
                                key={project.id}
                                project={project}
                            ></SingleProject>)
                        }
                    </div>
                </Container>
            </section>
            <section id="contact">
                <Container>
                <h1 className="section-heading text-white mb-5">Contact Me</h1>
                    <div className="d-grid contact-container">
                        <div className="form-container">
                            <form onSubmit={sendEmail}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Your Name" name="from_name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="email" placeholder="Your Email" name="email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Your Message"
                                        style={{ height: '100px' }}
                                        name="message"
                                    />
                                </Form.Group>

                                <Button className="btn secondary-btn mt-3" type="submit">
                                    Submit
                                </Button>
                            </form>
                        </div>
                        <div className="contact-info">
                            <h3 className="text-white">Address</h3>
                            <address className="text-white">Satkhira, Khulna, Banglafesh</address>
                            <h3 className="text-white">Cnntact Info</h3>
                            <div>
                                <p className="text-white">
                                    Phone: +88 01890551410<br/>
                                    Email: shawonahmmed19@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;