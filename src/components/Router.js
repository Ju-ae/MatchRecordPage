import React,{useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import InputMatch from "routes/InputMatchData";
import Home from "../routes/Home";

const AppRouter= () =>{
    return (
        <Router>
            <Switch>
                <Route path="/inputmatch">
                    <InputMatch />
                </Route>

                <Route path="/login">
                    <Auth />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;