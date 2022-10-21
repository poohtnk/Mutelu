import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Signup from '../signup';
import Home from '../home';
import Login from '../login';

class Routes extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        );
    }
}