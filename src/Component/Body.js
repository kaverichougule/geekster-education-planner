import { useState } from "react";
import "./Body.css";
import DisplaySubject from "./DisplaySubject";
export default function Book() {
  let [subject, setSubject] = useState("");
  let [hours, setHours] = useState("");
  let [arr, setArray] = useState([]);
  function SubjectInput(ele) {
    setSubject(ele.target.value);
  }

  function HoursInput(ele) {
    setHours(ele.target.value);
  }

  function AddItem() {
    if (subject != "" && hours != 0) {
      setArray([...arr, { subject, hours }]);
    }
    setSubject("");
    setHours("");
  }

  return (
    <div>
      <main className="searchBar">
        <input
          type="text"
          onChange={SubjectInput}
          placeholder="Subject"
          value={subject}
        />
        <input
          type="number"
          onChange={HoursInput}
          placeholder="Hours"
          value={hours} className="hours"
        />
        <button onClick={AddItem} className="add">Add</button>
      </main>
      <div className="container">
        {arr.map((ele, index) => {
          return (
            <DisplaySubject
              key={index}
              subject={ele.subject}
              hours={ele.hours}
            />
          );
        })}
      </div>
    </div>
  );
}
