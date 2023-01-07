import React from 'react';

interface NavBarProps {
    title: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <nav>
            <h1>{props.title}</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/mail-ai">Mail-AI</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
