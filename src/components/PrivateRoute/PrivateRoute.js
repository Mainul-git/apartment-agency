import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {

    const token = localStorage.getItem("userToken");

    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;