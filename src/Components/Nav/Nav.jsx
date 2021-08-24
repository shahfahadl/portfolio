import React from 'react';
import './styles/styles.css';

const Nav = ({selected}) => {
    return (
        <div className="nav-container">
            <div className="nav" >
                <h4>{`-> `}{selected && selected}</h4>
            </div>
        </div>
    )
}

export default Nav
