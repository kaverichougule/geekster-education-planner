import {useState}  from 'react'
import "./Body.css";
export default function Book(){
    let [subject,setSubject]=useState("");
    let [hours,setHours]=useState(0);
    let [arr,setArray]=useState([]);
    function SubjectInput(ele){
        setSubject(ele.target.value);
    }   

    function HoursInput(ele){
        setHours(ele.target.value);
    }

    function AddItem(){
        if(subject!="" && hours!=0)
        {
            
        }
        else{

        }
    }
    
    return(
        <main className="searchBar">
            <input type="text" onChange={SubjectInput} placeholder="Subject" value={subject} />
            <input type="number" onChange={HoursInput} placeholder="Hours" value={hours} />
            <button onClick={AddItem}>Add</button>
        </main>
    );
}