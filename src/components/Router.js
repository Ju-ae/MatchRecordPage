import React,{useState} from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import InputMatch from "routes/InputMatchData";
import Home from "../routes/Home";

const AppRouter= ({isLoggedIn}) =>{

{console.log("approuter reload");}
    return (
        <Router basename={process.env.PUBLIC_URL} >
            <Switch>
                <Route path="/inputmatch">
                    <InputMatch />
                </Route>
                <Route path="/">
                    <Home login={isLoggedIn} />
                </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;