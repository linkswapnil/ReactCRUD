import "./student.css";
const Students = (props) => {
  const {
    students,
    changeStudentName,
    loadNewData,
    deleteStudent,
    addNewStudent,
    onEditButtonClick,
  } = props;
  return (
    <div className="student-list">
      <h1>Students</h1>
      <button onClick={changeStudentName}> change name</button>
      {students.map((student) => {
        return (
          <div className="student">
            <span className="name">{student.name}</span>
            <button
              onClick={() => {
                deleteStudent(student.id);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                onEditButtonClick(student);
              }}
            >
              Edit Student
            </button>
          </div>
        );
      })}
      <button onClick={loadNewData}>Refresh</button>
      <button
        onClick={addNewStudent}
      >
        Add New Student
      </button>
    </div>
  );
};

export default Students;
