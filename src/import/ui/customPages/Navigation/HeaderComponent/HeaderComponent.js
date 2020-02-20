import React, { Component } from "react";
import {
  Row,
  Col,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }
  logoutHandler = e => {
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    return (
      <BrowserRouter>
        <Row className="p-3">
          <Col xs={8} sm={9} md={10} lg={11} xl={11}>
            <h6 className="internal-section-title text-white text-capitalize">
              {this.props.title}
            </h6>
          </Col>
          <Col xs={4} sm={3} md={2} lg={1} xl={1}>
            <div className="d-flex justify-content-between">
              <div className="orange-bg">
                <UncontrolledButtonDropdown>
                  <DropdownToggle caret className="orange-bg">
                    <FontAwesomeIcon icon={faUser}>Logout</FontAwesomeIcon>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <a href="" onClick={e => this.logoutHandler(e)}>
                        Logout
                      </a>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
            </div>
          </Col>
        </Row>
      </BrowserRouter>
    );
  }
}

export default withRouter(HeaderComponent);
