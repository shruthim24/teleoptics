import React from "react";

import {
  // TabContent,
  // TabPane,
  // Nav,
  // NavItem,
  // NavLink,
  Button,
  Row,
  Col,
  // Container,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from "reactstrap";
const Registration = props => {
  return (
    <Card>
      <CardBody>
        <Form>
          <Row className="mx-0 justify-content-center align-items-center">
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              <Row>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Patient Name
                    </Label>
                    <Input
                      type="text"
                      placeholder="Patient Name"
                      id="patientNameId"
                    ></Input>
                  </FormGroup>
                </Col>
                {/* </Row>
            <Row> */}
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Gurdian/Parent
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter Gurdian/Parent"
                      id="GurdianId"
                    ></Input>
                  </FormGroup>
                </Col>
                {/* </Row>
            <Row> */}
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">Gender</Label>
                    <Input type="select" name="select" id="genderId">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Input>
                  </FormGroup>
                </Col>
                {/* </Row>
              <Row xs={12} sm={12} md={12} lg={12} xl={12}> */}
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">Age</Label>
                    <Input
                      type="number"
                      placeholder="Enter Age"
                      id="AgeId"
                    ></Input>
                  </FormGroup>
                </Col>
                {/* </Row>
            

            <Row> */}
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Education
                    </Label>
                    <Input type="select" id="patientEducationId">
                      <option>Primary</option>
                      <option>Secondary</option>
                      <option>Graduation</option>
                      <option>Others</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Adhar/Other id
                    </Label>
                    <Input
                      type="text"
                      placeholder="Adhar/Other id"
                      id="identityProofId"
                    ></Input>
                  </FormGroup>
                </Col>
                {/* </Row>
              <Row> */}
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Contact No.
                    </Label>
                    <Input
                      type="number"
                      placeholder="Enter Contact No."
                      id="patientCotactId"
                    ></Input>
                  </FormGroup>
                </Col>

                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Occupation
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter Occupation"
                      id="patientOccupationId"
                    ></Input>
                  </FormGroup>
                </Col>
                {/* </Row>

            <Row> */}
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Address
                    </Label>
                    <Input
                      type="textarea"
                      placeholder="Enter Address"
                      id="patientAddressId"
                    ></Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">DOE</Label>
                    <Input type="date" placeholder="DOE" id="DOEId"></Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">CAMP</Label>
                    <Input type="text" placeholder="CAMP" id="CampId"></Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row
                className="text-center "
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                <Col
                  xs={{ offset: 4, size: 5 }}
                  sm={{ offset: 4, size: 5 }}
                  md={{ offset: 8, size: 4 }}
                  lg={{ offset: 10, size: 3 }}
                  xl={{ offset: 10, size: 3 }}
                  // className="pl-0 pr-0"
                >
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={4} xl={6}>
                      <Button className="btn-block m-1">Reset</Button>
                    </Col>
                    {/* <Col xl={4}>
                    <Button className="btn-block" color="success">
                      Save
                    </Button>
                  </Col> */}
                    <Col xs={12} sm={12} md={6} lg={4} xl={6}>
                      <Button
                        className="btn-block m-1"
                        color="success"
                        onClick={props.onNext}
                      >
                        Save
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Registration;
