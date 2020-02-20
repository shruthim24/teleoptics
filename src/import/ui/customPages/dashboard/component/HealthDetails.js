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
  Input,
  CardBody,
  Card
} from "reactstrap";

const HealthDetails = props => {
  return (
    <Card className="mt-2">
      <CardBody>
        <Form>
          <Row className=" justify-content-center align-items-center">
            <Col xs={12} sm={12} md={10} lg={10} xl={10}>
              {/* ----------- Physical Examination ------------- */}
              <Row>
                <Col>
                  <h5 className="orange-text">Physical Examination</h5>
                </Col>
              </Row>

              <Row>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">Height</Label>
                    <Input
                      type="number"
                      placeholder="Height(cm/ft)"
                      id="AgeId"
                    ></Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">Weight</Label>
                    <Input
                      type="number"
                      placeholder="Weight(Kgs)"
                      id="Weight"
                    ></Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Blood Pressure
                    </Label>
                    <Input
                      type="number"
                      placeholder="Blood Pressure(mm/Hg)"
                      id="BloodPressure"
                    ></Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Blood Sugar
                    </Label>
                    <Input
                      type="number"
                      placeholder="Blood Sugar(mg/dl)"
                      id="BloodSugar"
                    ></Input>
                  </FormGroup>
                </Col>
              </Row>
              {/* ----------- Systemic History ------------- */}
              <Row>
                <Col>
                  <h5 className="orange-text">Systemic History </h5>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Hypertension
                    </Label>
                    <Input type="select" id="Hypertension">
                      <option>Yes</option>
                      <option>No</option>
                      <option>Unknown</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Diabetese
                    </Label>
                    <Input type="select" id="Diabetese">
                      <option>Yes</option>
                      <option>No</option>
                      <option>Unknown</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Duration
                    </Label>
                    <Input type="select" id="Duration">
                      <option>&lt;1 Year</option>
                      <option>2-5 Year</option>
                      <option>6-10 Year</option>
                      <option>10-20 Year</option>
                      <option>&gt;20 Year</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Family History
                    </Label>
                    <Input type="select" id="FamilyHistory">
                      <option>Yes</option>
                      <option>No</option>
                      <option>Unknown</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Medication
                    </Label>
                    <Input type="select" id="Medication">
                      <option>Allopathaic</option>
                      <option>Ayush</option>
                      <option>No</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Medication Type
                    </Label>
                    <Input type="select" id="MedicationTypeID">
                      <option>Tablets</option>
                      <option>Insulin</option>
                      <option>Both</option>
                      <option>None</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                  <FormGroup>
                    <Label className="font-weight-bold gray-text">
                      Other Co-Morbidities
                    </Label>
                    <Input type="select" id="OCoMorbiditiesID">
                      <option>Cardiac</option>
                      <option>Stroke</option>
                      <option>Renal</option>
                      <option>Foot</option>
                      <option>Ulcer</option>
                      <option>Neuropathy</option>
                      <option>Others</option>
                    </Input>
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
                  md={{ offset: 4, size: 4 }}
                  lg={{ offset: 8, size: 4 }}
                  xl={{ offset: 8, size: 4 }}
                  // className="pl-0 pr-0"
                >
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Button className="btn-block m-1" onClick={props.onPrev}>
                        Prev
                      </Button>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Button className="btn-block m-1">Reset</Button>
                    </Col>
                    {/* <Col xl={3}>
                <Button className="btn-block" color="success">
                  
                </Button>
              </Col> */}
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
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

export default HealthDetails;
