import React from 'react';
import { Container } from 'react-bootstrap';
import useProjects from '../../hooks/useProjects';
import Header from '../../Shared/Header/Header';
import SingleProject from '../Home/SingleProject/SingleProject';

const Projects = () => {
    const [projects] = useProjects();
    return (
        <div>
            <section className="pb-5">
                <Container>
                <Header></Header>
                    <h1 className="text-center section-heading pt-5 pb-5">My Projects</h1>
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
        </div>
    );
};

export default Projects;