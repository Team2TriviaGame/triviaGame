import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import ErrorBoundaryComponent from "./error";
import Login from "./login";
import Game from "./game";

export default function RouterComponent() {
<<<<<<< HEAD

||||||| 97edd4d
    const location = useLocation();
=======
>>>>>>> 9e6f057bf7303d67c562d40fb26b29994930000b
    
    return (
<<<<<<< HEAD
        <Switch>
            <Route exact path="/" render= { () => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Route path="/game" component={Game} />
        </Switch>
||||||| 97edd4d
        <ErrorBoundaryComponent key={location.pathname}>
            <Switch>
                <Route exact path="/" render= { () => <Redirect to="/login" />} />
                <Route path="/login" component={Login} />
                <Route path="/game" component={Game} />
            </Switch>
        </ErrorBoundaryComponent>
=======
            <Switch>
                <Route exact path="/" render= { () => <Redirect to="/login" />} />
                <Route path="/login" component={Login} />
                <Route path="/game" component={Game} />
            </Switch>
>>>>>>> 9e6f057bf7303d67c562d40fb26b29994930000b
    );
}