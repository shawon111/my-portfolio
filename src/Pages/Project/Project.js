import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useProjects from '../../hooks/useProjects';
import './Project.css';

const Project = () => {
    const {Id} = useParams();
    return (
        <div>
            <section id="project">
                <Container>
                    <h2>project Id: {Id}</h2>
                </Container>
            </section>
        </div>
    );
};

export default Project;