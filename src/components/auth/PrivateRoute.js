import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";


export default function PrivateRoute({ component: Component, authenticated, ...rest }) {
     const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => currentUser
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
