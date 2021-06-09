import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      //   path={path}  //  For setting path={path}, we are relying on {...rest}
      {...rest}
      render={(props) => {
        // if (!auth.getCurrentUser()) return <Redirect to="/login" />;
        if (!auth.getCurrentUser())
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
            //  "from" is a custom attribute added
            //  "props.location" has the current location before we redirect the user to the "Login" Page
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
