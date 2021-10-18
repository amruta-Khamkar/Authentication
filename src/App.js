import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, NavLink,Redirect } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { Toolbar } from '@mui/material';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import { Component } from 'react';
import Home from './Components/Home';
import ChangePassword from './Components/ChangePassword';
import { Logout } from '@mui/icons-material';




class App extends Component {
  
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route  exact path="/"  component={Login}></Route>
            <Route path="/dash" component={Dashboard}></Route>
            <Route path="/changePass" component={ChangePassword}></Route>
          </Switch>
        </Router>
        {/* <Nav/> */}


      </>
    );

  }
}
export default App;
