import React, { Component }from 'react';
import { Stack } from 'react-native-router-flux';

import Login from ".././pages/login";

export default class Routes extends Component{
  render(){
    return(
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login"/>
        </Stack>
      </Router>
    );
  }  
}