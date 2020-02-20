import React, { Component } from "react";
import applicationConstants from "../../constants/applicationContants";
// import logo from "./logo.svg";
// import {Redirect} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { withRouter } from "react-router";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
  // Alert
} from "reactstrap";

class login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    // debugger;
    fetch("http://3.6.238.90:5002/api/v1/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        loginId: this.state.email,
        password: this.state.password,
        deviceId: "",
        deviceType: "",
        browserType: "",
        browserVersion: ""
      })
    })
      .then(Response => Response.json())
      .then(result => {
        console.log(result);
        if (result.code === 1) alert("Invalid User");
        else {
          console.log(JSON.stringify(result.data.token));
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("isLogin", true);
          this.props.onSubmit();
        }
        this.props.history.push("/AddCamp");
      });
  }

  render() {
    console.log("________", this.state);

    return (
      <Form>
        <Row className="m-0 justify-content-center align-items-center full-height bg-light">
          {/* <Col xs={2} sm={2} md={3} lg={4} xl={4} className="bg-white" /> */}
          <Col xs={8} sm={8} md={6} lg={3} xl={3}>
            <div className="position-relative">
              <img
                src={applicationConstants.logoImg}
                alt="appLogo"
                className=" logoStyle"
              />
            </div>
            <FormGroup>
              <Label className="font-weight-bold orange-text">Login ID</Label>
              <Input
                type="email"
                placeholder="Login ID"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label className="font-weight-bold orange-text">Password</Label>
              <Input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button
              className="btn btn-block mb-2 orange-bg"
              size="lg"
              onClick={this.handleSubmit}
            >
              Login
            </Button>
          </Col>
          {/* <Col xs={2} sm={2} md={3} lg={4} xl={4} className="bg-white" /> */}
        </Row>
      </Form>
    );
  }
}

export default withRouter(login);
