import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link,Redirect } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { Toolbar } from '@mui/material';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { Component } from 'react';
import Home from './Components/Home';

export class Routing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Box sx={{ flexGrow: 1, backgroundColor: "black" }}>

                        <AppBar position="static">
                            <Toolbar sx={{ backgroundColor: "black" }}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 1 }}
                                >
                                </IconButton>

                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer", marginLeft: "50px" }}>
                                    <Link to="/login">Login</Link></Typography>

                            </Toolbar>
                        </AppBar>
                    </Box>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/dash" exact component={Dashboard}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routing
