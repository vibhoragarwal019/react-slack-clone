import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import  SignIn  from './SignIn';
import Slack from './Slack';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/main" component={Slack} />
        </Switch>
      </div>
    )
  }
}


export default App;
