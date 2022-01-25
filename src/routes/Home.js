import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";
import Intro from "./Intro";

const Home = ({ login }) => {
    const [auth, setAuth] = useState(false);
    console.log(auth);
    const onClick = () => {
        setAuth(true);
    }

    return (
        <div>
            {console.log(login, auth)}
            {login ?
                null
                :
                <>
                    {auth ? <Auth /> :  <button onClick={onClick}>login</button>}
                </>

            }
            <Intro />
        </div>
    );
}

export default Home;