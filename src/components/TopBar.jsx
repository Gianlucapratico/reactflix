import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import { BiSearch } from "react-icons/bi";
import { BiBell } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";

const TopBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg " className="sticky-top">
    <Container fluid>
      <img src={logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Tv-Shows</Nav.Link>
          <Nav.Link href="#Browse">Movies</Nav.Link>
          <Nav.Link href="#Browse">Recently Added</Nav.Link>
          <Nav.Link href="#Browse">My List</Nav.Link>
        </Nav>
        <Nav className="Nav2 ">
          <Nav.Link href="#search">
            <BiSearch />
          </Nav.Link>
          <Nav.Link href="#KIDS">KIDS</Nav.Link>
          <Nav.Link href="#bell">
            <BiBell />
          </Nav.Link>
          <Nav.Link href="#person">
            <BiUserPlus />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopBar;
