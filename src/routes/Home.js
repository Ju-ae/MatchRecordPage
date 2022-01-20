import { database, firestore } from "fbase";
import { addDoc, doc, setDoc } from "firebase/firestore";
import React from "react";


const Home = () => {
    const addData= async(event)=>{
        event.preventDefault();
        for(var i in event.target.){
            console.log(i);
        }
        
        // await setDoc(doc(firestore, "match_record_kor", "test1"), {
        //     name: "Los Angeles",
        //     state: "CA",
        //     country: "USA"
        // });

        const docRef = await addDoc(collection(firestore, "match_record_kor"), {
            match_info : "1차전", 
            match_location : "", 

        });
        

    }
    return(
        <div>
            <h3>home</h3>
            <form onSubmit={addData}>
                <label name="name">이름</label>
                <input name="name" id="name" type="string"></input>
                <br></br>
                <label name="age">나이</label>
                <input name="age" id="age" type="string"></input>
                <input type="submit"/>
            </form>

        </div>
    );
};
export default Home;