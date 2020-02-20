import React from "react";

import {
  //   TabContent,
  //   TabPane,
  //   Nav,
  //   NavItem,
  //   NavLink,
  Button,
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const Diagnosis = props => {
  return (
    <div className="margin-0">
      <Form>
        <Row className=" justify-content-center align-items-center">
          <Col xs={12} sm={12} md={12} lg={8} xl={8}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text  ">
                    Pre-Dilation
                  </Label>
                  <Input type="textarea" id="PreDilationID"></Input>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    Post-Dilation
                  </Label>
                  <Input type="textarea" id="PostDilationID"></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row className="ml-3">
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    <Label check>
                      <Input type="radio" name="radio1" />
                      Disk suspect
                    </Label>
                  </Label>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    <Label check>
                      <Input type="radio" name="radio2" />
                      DR
                    </Label>
                  </Label>
                  <Input type="select" id="DRid">
                    <option>Mild NPDR</option>
                    <option>Moderate NPDR</option>
                    <option>Severe NPDR</option>
                    <option>PDR</option>
                    <option>DME</option>
                    <option>Uncertain</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">AMD</Label>
                  <Input type="select" id="AMDid">
                    <option>Dry AMD</option>
                    <option>Wet AMD </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    {props.Diagnosis}
                  </Label>
                  <Input type="select" id="STDRID">
                    <option>1</option>
                    <option>2</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">Other</Label>
                  <Input type="textarea" id="OtherID"></Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Button className="m-1 pl-5 pr-5 float-right">Reset</Button>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Button className="m-1 pl-5 pr-5 float-left" color="success">
                  Save
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Diagnosis;
