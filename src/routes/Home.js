import { database, firestore } from "fbase";
import { addDoc, collection, collectionGroup, CollectionReference, doc, setDoc } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import Intro from "./Intro";

const Home = () => {
    return(
        <div>
            <Link to="/login">login</Link>
            <Intro />
        </div>
        );
}

export default Home;