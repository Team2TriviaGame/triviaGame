import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import ErrorBoundaryComponent from "./error";
import Login from "./login";
import Game from "./game";

export default function RouterComponent() {

    
    return (
        <Switch>
            <Route exact path="/" render= { () => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Route path="/game" component={Game} />
        </Switch>
    );
}