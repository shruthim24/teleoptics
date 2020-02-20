import React from "react";
import {
  // TabContent,
  // TabPane,
  // Nav,
  // NavItem,
  // NavLink,
  // Button,
  Row,
  Col,
  Container
} from "reactstrap";
import "../dashboard/component/Registration";

// import ProgressBar from "../../customComponents/ProgressTab/ProgressTab";
import Stepper from "../../customComponents/Stepper/Stepper";

const Dashboard = props => {
  return (
    <Container>
      {/* <div> */}
      <Row className="gray-text pt-4 mt-5 ">
        <Col xs={10} sm={10} md={10} lg={5} xl={5}>
          <p>
            <h5>Patient Name :</h5>
          </p>
        </Col>
        <Col xs={10} sm={10} md={10} lg={3} xl={3}>
          <p>
            <h5>ID :</h5>
          </p>
        </Col>
        <Col xs={10} sm={10} md={10} lg={4} xl={4}>
          <p>
            <h5>Contact No. :</h5>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            {/* <ProgressBar /> */}
            <Stepper />
          </div>
        </Col>
        {/* <col xs={12} sm={12} md={12} lg={12} xl={12}>
          <hr />
        </col> */}
      </Row>
      {/* <hr /> */}
    </Container>
  );
};

export default Dashboard;
