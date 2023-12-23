import {useState}  from 'react';
import "./DisplaySubject.css";

export default function DisplaySubject(props){
    let [val,updateHours]=useState(props.hours);
    function Increase(){
        updateHours(Number(val)+1);
    }
    function Decrease(){
        if(val>0){
            updateHours(Number(val)-1);
        }
    }
    return(
        <div className="container2">
            <span>{props.subject}</span>
            <span>{val} hrs</span>
            <div className='incDecBtn'>
                <p onClick={Decrease} className='Increase'>-</p>
                <p onClick={Increase} className='Decrease'>+</p>
            </div>    
        </div>
    );
}