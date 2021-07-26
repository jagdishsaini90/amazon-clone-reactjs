import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../firebase/AuthProvider";


export default function PrivateRoute({ component: Component, authenticated, ...rest }) {
  const { currentUser } = useAuth();
     console.log("PrivateRoute Page")
  
  return (
    <Route
      {...rest}
      render={(props) => currentUser
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
