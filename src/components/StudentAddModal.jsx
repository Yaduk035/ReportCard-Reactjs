import axios from "axios";
import { response } from "express";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const StudentModal = () => {
  const [rollNo, setRollNo] = useState("");
  const [studentName, setStudentName] = useState("");
  const [physics, setPhysics] = useState("");
  const [chemistry, setChemistry] = useState("");
  const [biology, setBiology] = useState("");
  const [english, setEnglish] = useState("");
  const [hindi, setHindi] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        studentName,
        rollNo,
        physics,
        chemistry,
        biology,
        english,
        hindi,
      };
      const jsonData = JSON.stringify(data);
      const response = await axios.post(
        "https://reportcard-backend.onrender.com/student",
        jsonData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }

    handleClose(); // Close the modal after submission
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Add students</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="rollNo">
              <Form.Label>Roll No:</Form.Label>
              <Form.Control
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="studentName">
              <Form.Label>Student Name:</Form.Label>
              <Form.Control
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="physics">
              <Form.Label>Physics:</Form.Label>
              <Form.Control
                type="number"
                value={physics}
                onChange={(e) => setPhysics(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="chemistry">
              <Form.Label>Chemistry:</Form.Label>
              <Form.Control
                type="number"
                value={chemistry}
                onChange={(e) => setChemistry(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="biology">
              <Form.Label>Biology:</Form.Label>
              <Form.Control
                type="number"
                value={biology}
                onChange={(e) => setBiology(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="english">
              <Form.Label>English:</Form.Label>
              <Form.Control
                type="number"
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="hindi">
              <Form.Label>Hindi:</Form.Label>
              <Form.Control
                type="number"
                value={hindi}
                onChange={(e) => setHindi(e.target.value)}
              />
            </Form.Group>
            {/* <Form.Group controlId="total">
              <Form.Label>Total:</Form.Label>
              <Form.Control type="text" value={calculateTotal()} readOnly />
            </Form.Group> */}
            <br />
            <Button variant="dark" type="submit">
              Add student
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StudentModal;
