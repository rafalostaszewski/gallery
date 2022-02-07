import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "lightblue",
};

const Header = ({ tittle }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <Navbar.Brand href="/">{tittle}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

// Javascript Syntax: To insert javascript code in the JSX it need to put {}

/*
Different methods to acces attributes (<Header tittle="Image Gallery"/> in App.js):
tittle = property
"Image Gallery" = value attribute

const Header = (props) => {
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">{props.tittle}</Navbar.Brand>
        </Navbar>
    )
};

or

const Header = (props) => {
    const { tittle } = props;
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">{tittle}</Navbar.Brand>
        </Navbar>
    )
};

or

const Header = ({ tittle }) => {
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">{tittle}</Navbar.Brand>
        </Navbar>
    )
};
*/
