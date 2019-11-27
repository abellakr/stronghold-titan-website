import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import './Toolbar.css'
import { Router, Link } from 'react-router-dom'

const useStyles = {
    display: "flex",
    color: "white",
    height: "24px",
    width: "30px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "0",
    sizing: "border-box",
}

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">

            <div onClick={props.drawerToggleClickHandler} className="toolbar__toogle-button">
                <IconButton className="menu_icon" style={useStyles} aria-label="menu">
                    <MenuIcon fontSize="medium"/> 
                </IconButton>
            </div>

            <div className="toolbar__logo"> <a href="/">THE LOGO</a> </div>
            
            <div className="spacer"></div>

            <div className="toolbar_navigation-items"> 
            <Router>
                <ul >
                    <li><Link to="/">Home/</Link></li>
                    <li><Link to="/Facility">Facility></Link></li>
                    <li><Link to="/Coaching">Coaching></Link></li>
                    <li><Link to="/Contact">Contact></Link></li>
                </ul>
            </Router>
            </div>
        </nav>
    </header>
);

export default toolbar;