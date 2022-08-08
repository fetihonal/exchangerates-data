import React from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "../../assets/images/logo.svg";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Odeon" />
    </div>
  );
};
export default Header;
