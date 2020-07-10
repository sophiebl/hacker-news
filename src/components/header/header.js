import React from 'react';
import logo from '../../logo.gif';

const Header = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            Hacker News
        </h1>
        <nav>
            <ul>
                <li><a href="#">New</a></li>
                <li><a href="#">Past</a></li>
                <li><a href="#">Comments</a></li>
                <li><a href="#">Ask</a></li>
                <li><a href="#">Show</a></li>
                <li><a href="#">Jobs</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;