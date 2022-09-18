import { useState } from "react";

const AddStudent = (props) => {
  const { onAddStudentBackClick, onAddBtnClick } = props;
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [rollNumber, setRollNumber] = useState();
  
  return (
    <div>
      Add New Student
      <div>
        <div className="field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="id">Id: </label>
          <input type="text" id="id" 
          value={id}
           onChange={(event) => {
            setId(event.target.value);
          }}
          />
        </div>
        <div className="field">
          <label htmlFor="rollNumber">Roll Number: </label>
          <input id="rollNumber" type="text" 
          value={rollNumber}
           onChange={(event) => {
            setRollNumber(event.target.value);
          }}
          />
        </div>
      </div>
      <button onClick={onAddStudentBackClick}>Back</button>
      <button onClick={()=>{
          onAddBtnClick({
            id: Number(id),
            name: name,
            "roll-id": rollNumber
          })
      }}>Add</button>
    </div>
  );
};

export default AddStudent;
