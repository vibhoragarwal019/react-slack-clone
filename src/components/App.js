import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import  SignIn  from './SignIn';
import Slack from './Slack';
import {UserContext} from '../providers/UserProvider';

const PrivateRoute = ({ component: Component, isLoggedIn, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          // we will pass the path the user is trying to access to our login component
          // instead of passing string we pass object
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

function App() {
    const auth = useContext(UserContext);
    console.log('App -> auth', auth);

    

    return (
      <div>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignIn} />
          <PrivateRoute
          exact
          path="/"
          component={Slack}
          isLoggedIn={auth.user ? true : false}
        />
        </Switch>
      </div>
    );
  }


export default App;
