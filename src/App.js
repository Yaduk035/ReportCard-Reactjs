import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import ReportCard from "./components/ReportCard";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [studentData, setstudentData] = useState();

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
  return (
    <>
      <Header />
      <ReportCard studentData={studentData} />
    </>
  );
}

export default App;
