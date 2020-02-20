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

const HealthDetails = props => {
  return (
    <div className="margin-0">
      <Form>
        <Row className="mx-0 justify-content-center align-items-center">
          <Col xs={12} sm={12} md={10} lg={10} xl={10}>
            {/* ----------- Left eye ------------- */}
            <Row>
              <Col>
                <h5 className="orange-text">LEFT EYE</h5>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    BVCA Distance
                  </Label>
                  <Input
                    type="number"
                    placeholder="0"
                    id="leftBVCADistanceID"
                  ></Input>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    BVCA Near
                  </Label>
                  <Input
                    type="number"
                    placeholder="0"
                    id="leftBVCANearID"
                  ></Input>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    Lense Status
                  </Label>
                  <Input type="select" id="leftLenseStatusId">
                    <option>Phakic Clear</option>
                    <option>Phakic Elc</option>
                    <option>Cataract</option>
                    <option>Pseudophakic</option>
                    <option>Aphakic</option>
                    <option>
                      Intraocular Lens With Posterior Capsular Opcification
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={6} lg={3} xl={3}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    Anterior Chamber
                  </Label>
                  <Input
                    type="select"
                    placeholder="Select"
                    id="leftAnteriorChamber"
                  >
                    <option>Shallow</option>
                    <option>Normal</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            {/* ----------- Right eye------------- */}
            <Row>
              <Col>
                <h5 className="orange-text">RIGHT EYE</h5>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    BVCA Distance
                  </Label>
                  <Input
                    type="number"
                    placeholder="0"
                    id="rightBVCADistanceID"
                  ></Input>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    BVCA Near
                  </Label>
                  <Input
                    type="number"
                    placeholder="0"
                    id="rightBVCANearID"
                  ></Input>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    Lense Status
                  </Label>
                  <Input type="select" id="rightLenseStatusId">
                    <option>Phakic Clear</option>
                    <option>Phakic Elc</option>
                    <option>Cataract</option>
                    <option>Pseudophakic</option>
                    <option>Aphakic</option>
                    <option>
                      Intraocular Lens With Posterior Capsular Opcification
                    </option>
                  </Input>
                </FormGroup>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <FormGroup>
                  <Label className="font-weight-bold gray-text">
                    Anterior Chamber
                  </Label>
                  <Input
                    type="select"
                    placeholder="Select"
                    id="rightAnteriorChamber"
                  >
                    <option>Shallow</option>
                    <option>Normal</option>
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
                  <Col xl={4}>
                    <Button className="btn-block" onClick={props.onPrev}>
                      Prev
                    </Button>
                  </Col>
                  <Col xl={4}>
                    <Button className="btn-block">Reset</Button>
                  </Col>
                  {/* <Col xl={3}>
                    <Button className="btn-block" color="success">
                      Save
                    </Button>
                  </Col> */}
                  <Col xl={4}>
                    <Button
                      className="btn-block"
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
    </div>
  );
};

export default HealthDetails;
