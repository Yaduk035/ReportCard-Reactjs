import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";

function FormExample({ getAllStudents, closeStudenForm }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
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
        "http://localhost:4000/student",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [rollNo, setRollNo] = useState();
  const [studentName, setStudentName] = useState();
  const [physics, setPhysics] = useState();
  const [chemistry, setChemistry] = useState();
  const [biology, setBiology] = useState();
  const [english, setEnglish] = useState();
  const [hindi, setHindi] = useState();
  const [maths, setMaths] = useState();

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Student Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="student name"
              onChange={(e) => setStudentName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Roll no</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Rull no"
              defaultValue="Otto"
              onChange={(e) => setRollNo(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group> */}
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>English</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) => setEnglish(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Physics</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) => setPhysics(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Maths</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) => setMaths(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Chemistry</Form.Label>
            <Form.Control
              type="number"
              required
              setc
              onChange={(e) => setChemistry(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Hindi</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) => setHindi(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Biology</Form.Label>
            <Form.Control
              type="number"
              required
              onChange={(e) => setBiology(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default FormExample;
