import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CampList from "../camp/CampList";
import Moment from "react-moment";

import {
  // Table,
  Row,
  Col,
  Container,
  Button,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Label
} from "reactstrap";

class Camp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      address: "",
      pinCode: "",
      region: 0,
      Date: "",
      questionAnwer: "",
      campStatus: 1,
      modal: false,
      title: "Add"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.toggle = this.toggle.bind(this);

    // this.close = this.close.bind(this);
    // this.handleDatePicker = this.handleDatePicker.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    this.setState({
      location: "",
      address: "",
      pincode: "",
      Date: ""
    });
    this.setState({ title: "Add" });
  }

  async handleSubmit() {
    const token = await localStorage.getItem("token");

    console.log(`token`, token);

    fetch("http://3.6.238.90:5002/api/v1/updateCamp", {
      method: "post",
      headers: {
        Accept: "application/json",
        token: `${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        campCode: this.state.campCode,
        location: this.state.location, //string
        address: this.state.address, //string
        pinCode: this.state.pincode, //6 digit number
        region: parseInt(this.state.region), //(urban=0,rural=1)
        date: this.state.date, //( yyyy/mm/dd)
        questionAnwer: "", // array of question answer
        campStatus: parseInt(this.state.campStatus) // 0-inactive, 1-active
      })
    })
      .then(Response => Response.json())
      .then(result => {
        console.log(result);
        if (result.Status === 1) alert("Camp not added");
        else {
          console.log(JSON.stringify(result));
        }
        // this.props.history.push("/Dashboard");
      });
    this.setState({
      modal: !this.state.modal
    });
    window.location.reload(false);
  }

  handleModal = async item => {
    console.log("___________data", item);
    await this.setState({
      modal: !this.state.modal,
      campCode: item.campCode,
      location: item.location,
      address: item.address,
      pincode: item.pinCode,
      date: item.date,
      region: item.region,
      campStatus: item.campStatus
    });
    console.log("___state", this.state);
    this.setState({ title: "Update" });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="p-4 mt-3 mb-3"></div>
            <div>
              <Row>
                <Col>
                  <div>
                    <Button className="orange-bg mb-2" onClick={this.toggle}>
                      Add Camp
                    </Button>
                    <Modal
                      isOpen={this.state.modal}
                      toggle={this.toggle}
                      className="orange-bg"
                    >
                      <ModalHeader
                        text-center
                        toggle={this.toggle}
                        close={this.closeBtn}
                      >
                        <h3>Add Camp</h3>
                      </ModalHeader>
                      <ModalBody>
                        <Form>
                          <FormGroup row>
                            <Col sm={3}>
                              <Label className="font-weight-bold">
                                location
                              </Label>
                            </Col>
                            <Col sm={9}>
                              <Input
                                type="text"
                                placeholder="Location"
                                id="locationId"
                                name="location"
                                value={this.state.location}
                                onChange={this.handleChange}
                              ></Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={3}>
                              <Label className="font-weight-bold">
                                Address
                              </Label>
                            </Col>
                            <Col sm={9}>
                              <Input
                                type="text"
                                placeholder="Address"
                                id="addressID"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                              ></Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={3}>
                              <Label className="font-weight-bold">
                                Pin Code
                              </Label>
                            </Col>
                            <Col sm={9}>
                              <Input
                                type="number"
                                placeholder="Pin Code"
                                id="pincode"
                                name="pincode"
                                value={this.state.pincode}
                                onChange={this.handleChange}
                              ></Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={3}>
                              <Label className="font-weight-bold">Date</Label>
                            </Col>
                            <Col sm={9}>
                              <Input
                                type="date"
                                placeholder="Date"
                                id="Date"
                                value={this.state.date}
                                name="date"
                                onChange={this.handleChange}
                              ></Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={3}>
                              <Label className="font-weight-bold">Region</Label>
                            </Col>
                            <Col sm={9}>
                              <Input
                                type="select"
                                id="region"
                                name="region"
                                value={this.state.region}
                                // defaultValue={this.state.selectValue}
                                onChange={this.handleChange}
                              >
                                <option value="0">Rural</option>
                                <option value="1">Urban</option>
                              </Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={3}>
                              <Label className="font-weight-bold">
                                Camp Status
                              </Label>
                            </Col>
                            <Col sm={9}>
                              <Input
                                type="select"
                                id="campStatus"
                                name="campStatus"
                                value={this.state.campStatus}
                                // defaultValue={this.state.selectValue}
                                onChange={this.handleChange}
                              >
                                <option value="0">Inactive</option>
                                <option value="1">Active</option>
                              </Input>
                            </Col>
                          </FormGroup>
                        </Form>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>
                          Cancel
                        </Button>
                        <Button color="primary" onClick={this.handleSubmit}>
                          {this.state.title}
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </Col>
                <Col xs={4}>
                  <div>
                    <InputGroup>
                      <Input className="border-9rem" placeholder="Search" />
                      <InputGroupAddon addonType="append">
                        <InputGroupText className="orange-bg text-white border-9rem">
                          <FontAwesomeIcon icon={faSearch} />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          {/* --------Camp details table-------- */}
          <CampList handleModal={this.handleModal} />
        </Row>
      </Container>
    );
  }
}

export default Camp;
