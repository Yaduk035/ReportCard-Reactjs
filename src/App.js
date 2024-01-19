import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ReportCard from "./components/ReportCard";
import axios from "axios";
import { useState, useEffect } from "react";
import AddStudents from "../src/components/Addstudents";
import { Button } from "react-bootstrap";

function App() {
  const [studentData, setstudentData] = useState();
  const [showStudentForm, setShowStudentForm] = useState(false);

  const getAllStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/student");
      setstudentData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllStudents();
  }, []);
  useEffect(() => {
    getAllStudents();
  }, [setShowStudentForm]);

  const closeStudenForm = () => {
    setShowStudentForm(false);
  };

  const deleteStudent = async (value) => {
    const response = await axios.delete(
      `http://localhost:4000/student/${value}`
    );
    console.log(response);
    getAllStudents();
    alert("Student data succefully deleted");
  };

  return (
    <>
      <Header
        getAllStudents={getAllStudents}
        closeStudenForm={closeStudenForm}
      />
      <div style={{ textAlign: "center" }}>
        <Button onClick={() => setShowStudentForm((prev) => !prev)}>
          {showStudentForm ? "Close form" : "Add students"}
        </Button>
      </div>
      {showStudentForm && <AddStudents />}
      <ReportCard studentData={studentData} deleteStudent={deleteStudent} />
    </>
  );
}

export default App;
