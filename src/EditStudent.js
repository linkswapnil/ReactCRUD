import { useState } from "react";

const EditStudent = (props) => {
  const { onEditStudentBackClick, student, onEditClick } = props;
  const [editStudent, setEditStudent] = useState(student);
  return (
    <div>
      Edit Student
      <div>
        <div className="field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={editStudent.name}
            onChange={(event) => {
              setEditStudent({
                ...editStudent,
                name: event.target.value,
              });
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="id">Id: </label>
          <input
            type="text"
            id="id"
            value={editStudent.id}
            onChange={(event) => {
              setEditStudent({
                ...editStudent,
                id: event.target.value,
              });
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="rollNumber">Roll Number: </label>
          <input
            id="rollNumber"
            type="text"
            value={editStudent["roll-id"]}
            onChange={(event) => {
               console.log('student::', student); 
               console.log('edited::', editStudent); 
              setEditStudent({
                ...editStudent,
                "roll-id": event.target.value,
              });
            }}
          />
        </div>
      </div>
      <button onClick={onEditStudentBackClick}>Back</button>
      <button
        onClick={() => {
          onEditClick(editStudent);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default EditStudent;
