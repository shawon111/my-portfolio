import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProjects from '../../hooks/useProjects';
import Header from '../../Shared/Header/Header';
import './Project.css';

const Project = () => {
    const { Id } = useParams();
    // const [projects, setProjects] = useState([]);
    // useEffect(()=>{
    //     fetch('./projects.json')
    //     .then(res=>res.json())
    //     .then(data=> {
    //         data.map(datas=>console.log(datas))
    //     })
    // },[])
    const [projects] = useProjects();
    const matchedProject = projects.filter(project => project.id == Id);
    const theProject = matchedProject[0];
    // const { name, detail, features, image, image_2, image_3, link } = theProject;
    // console.log(name)
    return (
        <div>
            <section id="project">
                <Container>
                    <Header></Header>
                    <Card>
                        <Card.Title className="fs-1 text-center mb-5 mt-5">{theProject?.name}</Card.Title>
                        <div className="project-images">
                            <Card.Img className="w-100" variant="top" src={theProject?.image} />
                            <Card.Img className="w-100" variant="top" src={theProject?.image_2} />
                            <Card.Img className="w-100" variant="top" src={theProject?.image_3} />
                        </div>
                        <Card.Body>
                            <br/>
                            <Card.Text>
                                <h4>About The Project:</h4>
                            </Card.Text>
                            <p>{theProject?.detail}</p>
                            <br/>
                            <Card.Text>
                                <h4>Features:</h4>
                            </Card.Text>
                            <p>{theProject?.features}</p>
                            <button className="btn primary-btn"><a className="text-white text-decoration-none" href={theProject?.link}>Live Website</a></button>
                        </Card.Body>
                    </Card>
                </Container>
            </section>
        </div>
    );
};

export default Project;