import React from 'react';
import {Paper, Tab, Tabs, ListItem, ListItemText} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';

class NavBar extends React.Component {
    state = {
        value: 0,
      };
    
    handleChange = (event, value) => {
        event.preventDefault();
        this.setState({ value });
    }
    render() {
        return (
            <div>
                <Paper>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicateColor={"primary"}
                        centered>
                        <Tab label="Home" href="/"></Tab>
                        <Tab label="Facility" href="/"></Tab>
                        <Tab label="Coaching" href="/"></Tab>
                        <Tab label="Contact" href="/"></Tab>
                    </Tabs>
                </Paper>
            </div>
        );
    }
}

export default NavBar;   