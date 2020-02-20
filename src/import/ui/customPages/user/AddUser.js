import React, { useState } from "react";
import UserList from "../user/UserList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Table,
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

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginId: "",
      password: "",
      fullName: "",
      mobileNumber: "",
      gender: 0,
      roleId: 1,
      modal: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
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
      loginId: "",
      password: "",
      fullName: "",
      location: "",
      mobileNumber: ""
    });
  }

  close() {
    this.setState({
      modal: !this.state.modal
    });
  }

  async handleSubmit() {
    // const token = await localStorage.getItem("token");
    fetch("http://3.6.238.90:5002/api/v1/addUser", {
      method: "post",
      headers: {
        Accept: "application/json",
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        loginId: this.state.loginId,
        location: this.state.location, //mobile number or email id
        password: this.state.password, //string and storing as encrypted string
        fullName: this.state.fullName, //string
        mobileNumber: this.state.mobileNumber, //10 digit number
        gender: parseInt(this.state.gender), //(Male = 0/Female = 1/Others = 2),
        roleId: parseInt(this.state.roleId) // (optometrist=1,juniorReader=2,seniorReader=3,projectManager=4,admin=5)
      })
    })
      .then(Response => Response.json())
      .then(result => {
        console.log(result);
        if (result.Status === 1) alert("User not added");
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

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className=" p-4 mt-3 mb-3"></div>
            <div>
              <Row>
                <Col>
                  <div>
                    <Button className="orange-bg mb-2" onClick={this.toggle}>
                      Add a User
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
                        <h3>Add User</h3>
                      </ModalHeader>
                      <ModalBody>
                        <Form>
                          <FormGroup row>
                            <Col sm={4}>
                              <Label className="font-weight-bold">
                                Login ID
                              </Label>
                            </Col>
                            <Col sm={8}>
                              <Input
                                type="text"
                                placeholder="Login ID"
                                id="loginID"
                                name="loginId"
                                value={this.state.loginId}
                                onChange={this.handleChange}
                                refs="loginId"
                              ></Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={4}>
                              <Label className="font-weight-bold">
                                Password
                              </Label>
                            </Col>
                            <Col sm={8}>
                              <Input
                                type="text"
                                placeholder="Password"
                                id="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                refs="password"
                              ></Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={4}>
                              <Label className="font-weight-bold">
                                Full Name
                              </Label>
                            </Col>
                            <Col sm={8}>
                              <Input
                                type="text"
                                placeholder="Full Name"
                                id="fullName"
                                name="fullName"
                                value={this.state.fullName}
                                onChange={this.handleChange}
                              ></Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={4}>
                              <Label className="font-weight-bold">
                                Location
                              </Label>
                            </Col>
                            <Col sm={8}>
                              <Input
                                type="text"
                                placeholder="Full Name"
                                id="location"
                                name="location"
                                value={this.state.location}
                                onChange={this.handleChange}
                              ></Input>
                            </Col>
                          </FormGroup>

                          <FormGroup row>
                            <Col sm={4}>
                              <Label className="font-weight-bold">
                                Mobile Number
                              </Label>
                            </Col>
                            <Col sm={8}>
                              <Input
                                type="number"
                                placeholder="Mobile Number"
                                id="mobileNumber"
                                name="mobileNumber"
                                value={this.state.mobileNumber}
                                onChange={this.handleChange}
                              ></Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={4}>
                              <Label className="font-weight-bold">Gender</Label>
                            </Col>
                            <Col sm={8}>
                              <Input
                                type="select"
                                id="UserGender"
                                name="gender"
                                value={this.state.gender}
                                defaultValue={this.state.selectValue}
                                onChange={this.handleChange}
                                refs="gender"
                              >
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                                <option value="2">Other</option>
                              </Input>
                            </Col>
                          </FormGroup>
                          <FormGroup row>
                            <Col sm={4}>
                              <Label className="font-weight-bold">Role</Label>
                            </Col>
                            <Col sm={8}>
                              <Input
                                type="select"
                                placeholder="Role"
                                id="userRole"
                                name="roleId"
                                value={this.state.roleId}
                                defaultValue={this.state.selectValue}
                                onChange={this.handleChange}
                              >
                                <option value="1">Optometrist</option>
                                <option value="2">Doctor at Camp</option>
                                <option value="3">Doctor at Tele</option>
                                <option value="4">Junior Reader</option>
                                <option value="5">Senior Reader</option>
                                <option value="6">Project Reader</option>
                                <option value="0">Admin</option>
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
                          Add
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </Col>
                <Col xs={4}>
                  <InputGroup>
                    <Input className="border-9rem" placeholder="Search" />
                    <InputGroupAddon addonType="append">
                      <InputGroupText className="orange-bg text-white border-9rem">
                        <FontAwesomeIcon icon={faSearch} />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <UserList />
        </Row>
      </Container>
    );
  }
}
export default AddUser;
