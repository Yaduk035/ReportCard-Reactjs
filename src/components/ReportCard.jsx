import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const ReportCard = ({ studentData, deleteStudent }) => {
  //   const deleteStudent = async (value) => {
  //     const response = await axios.delete(
  //       `http://localhost:4000/student/${value}`
  //     );
  //     console.log(response);
  //   };

  return (
    <>
      <br />
      <br />
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Roll no.</th>
              <th>Student name</th>
              <th>Physics</th>
              <th>Chemistry</th>
              <th>Biology</th>
              <th>English</th>
              <th>Hindi</th>
              <th>Total</th>
              <th>Edit</th>
            </tr>
          </thead>
          {studentData &&
            studentData.map((data, i) => (
              <tbody key={data._id}>
                <tr>
                  <td>{i + 1}</td>
                  <td>{data?.rollNo}</td>
                  <td>{data?.studentName}</td>
                  <td>{data?.physics}</td>
                  <td>{data?.chemistry}</td>
                  <td>{data?.biology}</td>
                  <td>{data?.english}</td>
                  <td>{data?.hindi}</td>
                  <td>
                    {data?.physics +
                      data?.chemistry +
                      data?.biology +
                      data?.english +
                      data?.hindi}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => {
                        deleteStudent(`${data._id}`);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                {/* <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            ))}
        </Table>
      </Container>
    </>
  );
};

export default ReportCard;
