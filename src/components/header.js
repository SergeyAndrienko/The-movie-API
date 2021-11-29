import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to={'/'}>  <h1>React Movie </h1> </Link>
        </header>
    );
};

export default Header;