import { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import "./App.css";
import { getStudents, deleteStudent, addStudent } from "./service";
import Students from "./Students";

function App() {
  const [students, setStudents] = useState([]);
  const [referesh, setReferesh] = useState(false);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  useEffect(() => {
    getStudents().then((students) => {
      setStudents(students);
    });
  }, [referesh]);

  const changeStudentName = () => {
    const newStudentList = students.map((student, index) => {
      if (index === 0) {
        student.name = "New name";
      }
      return student;
    });
    setStudents(newStudentList);
  };

  const loadNewData = () => {
    setReferesh(!referesh);
  };

  const addNewStudent = () => {
    setShowAddUserForm(true);
  };

  const deleteStudentAction = (studentId) => {
    deleteStudent(studentId).then(() => {
      setReferesh(!referesh);
    });
  };

  const onAddUserBackClick = () => {
    setShowAddUserForm(false);
  }

  const onAddBtnClick = (student) => {
    addStudent(student).then(() => {
      setReferesh(!referesh);
      setShowAddUserForm(false);
    });
  }

  return (
    <div className="App">
      {showAddUserForm ? (
        <AddStudent 
          onAddUserBackClick={onAddUserBackClick}
          onAddBtnClick={onAddBtnClick}
        />
      ) : (
        <Students
          students={students}
          changeStudentName={changeStudentName}
          loadNewData={loadNewData}
          deleteStudent={deleteStudentAction}
          addNewStudent={addNewStudent}
        />
      )}
    </div>
  );
}

export default App;
