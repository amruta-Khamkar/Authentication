import React, { Component } from 'react';
import Login from './Login';
import Navi from './Navi';
import ReactDOM from 'react-dom';
import Products from './Products'

export class Dashboard extends Component {
    constructor(props){
       super(props);
    }
    render() {
        return (
            <>
                <Navi/>
               <h1 style={{textAlign:"center"}}>Welcome to our page {JSON.parse(localStorage.getItem("credArr")).Name}</h1>
               <Products/>

            </>
        )
    }
}

export default Dashboard;
