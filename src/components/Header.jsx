import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import StudentModal from "./StudentAddModal";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{ backgroundColor: "orangered" }}
    >
      <Container>
        <Navbar.Brand href="#home">Report Card</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
