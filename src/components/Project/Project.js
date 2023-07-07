import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle2 from "../Particle/Particle2";
import spotify from "../../assets/spotify.png";
import toilet from "../../assets/toilet.png";
import corona from "../../assets/corona.jpg";
import hospital from "../../assets/hospital.png";
import connect from "../../assets/connect4.png";


import './Project.css';


function Projects() {
    return (
        <section >
            <Particle2 / >
            <Container className = "projects" >
            <h1 className= "project-heading" > My Projects < /h1>  

            <Row>
                <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={spotify}
                    isBlog={true}
                    isPaper={false}
                    isDemo={true}
                    title="Spotify Simulation"
                    description="Designed a GUI interface with interesting features and interactions for the users. Resolved the users’ demands to download, manage, and play the podcasts. Supplied the users with the ability to playback speed, skip to their favorite parts, and save the current pause."
                    stack="TechStack: Java, JavaFx"
                    ghLink="https://github.com/TrongNguyenzzz/Podcast-Player"
                    demoLink="https://youtu.be/EQuO1gVVtWM"
                />
                </Col>
            </Row>

            <Row>
                <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={corona}
                    isBlog={true}
                    isPaper={true}
                    isDemo={false}
                    title="Modeling and predicting severity of COVID-19 by protein levels"
                    description="Assembling, auditing, and transforming data of nearly 500 patients with over 5200 proteins. Building and evaluating different linear regression models with predictors set to filter the most important proteins.
                    Analyzing and contemplating the effects of the most significant proteins with related context and proofs from other
resources."
                    stack="TechStack and Methodology: RStudio, Python, Regression Model"
                    ghLink="https://drive.google.com/file/d/1-OFGOnW-7IllR38NNtkXFV_v7rFCYuFz/view"
                />
                </Col>
          </Row>

          <Row>
                <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={hospital}
                    isBlog={true}
                    isPaper={false}
                    isDemo={false}
                    title="The University of Arizona Campus Health Simulation"
                    description="Allowed multiple users, staff to schedule different types of appointments with specific treatments and the authorized
                    users can manage/operate the database of the system. Illustrated and designed an outstanding example of Database Management System in third normal form and
                    Boyce–Codd normal form."
                    stack="TechStack: Java, SQL"
                    ghLink="https://github.com/TrongNguyenzzz/The-simulation-of-Campus-Health-at-the-University-of-Arizona"
                />
                </Col>
          </Row>

            <Row>
                <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={toilet}
                    isBlog={true}
                    isPaper={false}
                    isDemo={false}
                    title="Nearest Restroom Navigation"
                    description="Locating nearest restroom within the surrounding or selected area. Allowing users to rate, review, and feedback about the quality of restrooms."
                    stack="TechStack: Java, Python, Git/Github, Google APIs, Adobe XD, Android Studio."
                    ghLink="https://github.com/TrongNguyenzzz/Flushy-Project---Hackathon-App"
                />
                </Col>
          </Row>

          <Row>
                <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={connect}
                    isBlog={true}
                    isPaper={false}
                    isDemo={false}
                    title="Connect 4 Game"
                    description="Simulation of the famous game Connect 4. Allow users to play with computers or other players."
                    stack="TechStack: Java."
                    ghLink="https://github.com/TrongNguyenzzz/Connect-4-Games"
                />
                </Col>
          </Row>
        </Container > <
        /section>
    );
}

export default Projects;


       