import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  // Card,
  // Button,
  // CardTitle,
  // CardText,
  Row,
  Col
  // Container
} from "reactstrap";
import classnames from "classnames";
// import LEDiagnosis from "./LEDiagnosis";
// import REDiagnosis from "./REDiagnosis";
import Diagnosis from "../component/Diagnosis";

const ImageGrading = props => {
  const [activeTab, setActiveTab] = useState("leftab1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    // <div className="margin-0">
    <Row>
      <Col className="col-sm-2 p-0 ">
        <Nav tabs className="orange-bg text-white d-flex flex-column">
          <Row>
            <Col className="col-sm-12">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "leftab1" })}
                  onClick={() => {
                    toggle("leftab1");
                  }}
                >
                  LE Diagnosis
                </NavLink>
              </NavItem>
            </Col>
          </Row>
          <Row>
            <Col className="col-sm-12">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "leftab2" })}
                  onClick={() => {
                    toggle("leftab2");
                  }}
                >
                  RE Diagnosis
                </NavLink>
              </NavItem>
            </Col>
          </Row>
        </Nav>
      </Col>
      <Col className="col-sm-10">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="leftab1">
            <Row className="mx-0 justify-content-center align-items-center">
              <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                <Diagnosis Diagnosis={"LE Diagnosis"} />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="leftab2">
            <Row className="mx-0 justify-content-center align-items-center">
              <Col xs={12} sm={12} md={10} lg={10} xl={10}>
                <Diagnosis Diagnosis={"RE Diagnosis"} />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Col>
    </Row>
    // </div>
  );
};

export default ImageGrading;
