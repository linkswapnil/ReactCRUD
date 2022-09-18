import { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import "./App.css";
import EditStudent from "./EditStudent";
import { getStudents, deleteStudent, addStudent, editStudent } from "./service";
import Students from "./Students";

function App() {
  const [students, setStudents] = useState([]);
  const [referesh, setReferesh] = useState(false);
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [showEditStudentForm, setShowEditStudentForm] = useState(false);
  const [studentToEdit, setShowStudentToEdit] = useState(null);

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
    setShowAddStudentForm(true);
  };

  const deleteStudentAction = (studentId) => {
    deleteStudent(studentId).then(() => {
      setReferesh(!referesh);
    });
  };

  const onAddStudentBackClick = () => {
    setShowAddStudentForm(false);
  }

  const onAddBtnClick = (student) => {
    addStudent(student).then(() => {
      setReferesh(!referesh);
      setShowAddStudentForm(false);
    });
  }

  const onEditClick = (student) => {
    editStudent(student).then(() => {
      setReferesh(!referesh);
      setShowEditStudentForm(false);
    });
  }

  if(showEditStudentForm){
    return <EditStudent 
    student={studentToEdit}
    onEditClick={onEditClick}
    onEditStudentBackClick={()=>{
      setShowEditStudentForm(false);
    }}/>
  }

  return (
    <div className="App">
      {showAddStudentForm ? (
        <AddStudent 
          onAddStudentBackClick={onAddStudentBackClick}
          onAddBtnClick={onAddBtnClick}
        />
      ) : (
        <Students
          students={students}
          changeStudentName={changeStudentName}
          loadNewData={loadNewData}
          deleteStudent={deleteStudentAction}
          addNewStudent={addNewStudent}
          onEditButtonClick={(student)=>{
            setShowStudentToEdit(student)
            setShowEditStudentForm(true);
          }}
        />
      )}
    </div>
  );
}

export default App;
