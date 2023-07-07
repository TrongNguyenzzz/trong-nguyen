import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLogoGithub } from "react-icons/bi";
import { GrDocumentPdf } from "react-icons/gr";
import { MdEmojiObjects } from "react-icons/md";
import { Link } from 'react-router-dom';
import './Project.css';

function ProjectCards(props) {
    return ( <
        Card className = "project-card-view" >
        <
        Card.Img className = "card-img"
        variant = "top"
        src = { props.imgPath }
        alt = "card-img" / >
        <
        Card.Body className = "card-body" >
        <
        Card.Title className = "card-title" > { props.title } < /Card.Title>   <
        Card.Text className = "card-text" > { props.description } <
        /Card.Text> <
        Card.Text > { props.stack } <
        /Card.Text> <
        div className = "project-button1" >
        <
        Link to = { props.ghLink } >
        <
        Button className = "project-button" > { props.isPaper ? < GrDocumentPdf / > : < BiLogoGithub / > } { props.isPaper ? "Paper" : "GitHub" } < /Button>  <
        /Link > 

        {
            props.isDemo && ( <
                Link to = { props.demoLink } >
                <
                Button className = "project-button" > < MdEmojiObjects / > Demo < /Button>  <
                /Link > 
            )
        } <
        /div>

        { "\n" } { "\n" } <
        /Card.Body> <
        /Card>
    );
}
export default ProjectCards;