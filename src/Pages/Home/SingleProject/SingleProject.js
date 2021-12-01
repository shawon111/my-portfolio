import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProject.css';

const SingleProject = ({project}) => {
    const {image, link, name, id} = project;
    const url = `/${id}`;
    return (
        <div>
            <div className="single-project">
                <div className="single-project-container">
                    <img src={image} alt="" className="project-image" />
                    <div className="project-detail">
                        <h4 className="project-name text-white">{name}</h4>
                        <div className="btns d-flex justify-content-between">
                            <button className="btn secondary-btn"><a className="text-white text-decoration-none" href={link} target="_blank" rel="noreferrer">Live Website</a></button>
                            <button className="btn primary-btn"><Link className="text-decoration-none text-white" to={url}>Details</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;