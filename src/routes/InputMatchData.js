import { doc } from "firebase/firestore";

function InputMatch({score}) {
    const addScore = (event) => {
        console.log("score " + score.length);
        event.preventDefault();
        var score_input = document.getElementById("match_score").value;
        score.push(score_input);
        console.log(score.toString());
        var str = "";
        for (var s in score) {
            str += (s + 1) + "세트 : " + score.pop(s) + "\n";
        }
        document.getElementById("score_component").innerText = str;
    }

    const addData = async (event) => {
        event.preventDefault();
        console.log(document.getElementById("select").value);
        console.log(document.getElementById("match_name").value);
        console.log(document.getElementById("match_location").value);
        console.log(document.getElementById("match_date").value);
        console.log(document.getElementById("match_person").value);
        console.log(document.getElementById("match_score").value);
        // await setDoc(doc(firestore, "match_record_kor", "test1"), {
        //     name: "Los Angeles",
        //     state: "CA",
        //     country: "USA"
        // });

        // const docRef = await addDoc(collection(firestore, "match_record_kor"), {
        //     match_info : "1차전", 
        //     match_location : "aaa"
        // });
    }
    
    const addRival =() =>{
        
    }

    return (
        <div>
            <h3>대회결과 입력(경기별)</h3>
            <form onSubmit={addData}>
                <label>대회명</label>
                <input id="match_name" type="string"></input>
                <br />
                <label>대회일자</label>
                <input id="match_date" require="true" type="string"></input>
                <br />
                <label>대회장소</label>
                <input id="match_location" type="string"></input>
                <br />
                <label>상대선수</label>
                <input id="match_person" require="true" type="string"></input>
                <button id="btn_rival" onClick={addRival}>조회</button>
                <br />
                <label>경기결과</label>
                <select id="select">
                    <option>승</option>
                    <option>패</option>
                </select>
                <br />
                <label>세트스코어</label>
                <input id="match_score" type="string"></input>
                <button onClick={addScore}>+</button>
                <div id="score_component"></div>
                <br />
                <input type="submit" />
            </form>

        </div>
    );
}

export default InputMatch;