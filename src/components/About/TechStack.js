import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiPython,
    DiJava,
} from "react-icons/di";
import { TbLetterC } from "react-icons/tb";
import './About.css';

function Techstack() {
    return ( <
        Row style = {
            { display: "flex", flexDirection: "row" }
        } >
        <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiJava / >
        <
        /Col>  <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiPython / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        CgCPlusPlus / >
        <
        /Col>

        <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        TbLetterC / >
        <
        /Col>


        <
        /
        Row >
    );
}

export default Techstack;