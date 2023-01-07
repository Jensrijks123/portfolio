import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavBarProps {
    title: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <nav>
            <h1>{props.title}</h1>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/mail-ai">Mail-AI</NavLink>
                </li>
                <li>
                    <NavLink to="/text-ai">Text-AI</NavLink>
                </li>
                <li>
                    <NavLink to="image-ai">Image-AI</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
