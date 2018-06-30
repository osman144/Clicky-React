
import React from 'react';
import './Nav.css';

const Nav = props => (
    <nav className="navbar navbar-default" >
        <ul>
            <li className="brand">{props.title}</li>
            <li>Click on an image to begin!</li>
            <li>{props.wrong}</li>
            <li>Current Score: {props.score} | Highest Score: {props.topScore}  </li>
        </ul>
    </nav>
);


export default Nav;