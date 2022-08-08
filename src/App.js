import React from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./components/Header";
import Exchange from "./components/Exchange";
import History from "./components/History";

const App = (props) => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col className="col-md-6 ml-auto mr-auto">
            <Exchange />
            <History />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default App;
