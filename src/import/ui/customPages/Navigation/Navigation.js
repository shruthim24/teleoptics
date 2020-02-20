import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import menuData from "../../customComponents/MenuNavigation/menuData";
import Strip from "../../customComponents/Strip/Strip";
import MenuNavigation from "../../customComponents/MenuNavigation/MenuNavigation";
import RoutesComponent from "./RotuesComponent/RoutesComponent";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import applicationConstants from "../../constants/applicationContants";
import Login from "../login/Login";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuCollapse: false,
      title: "Camp Details",
      isLogin: false
    };
    this.handleMenuSelect = this.handleMenuSelect.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    // this.getLoginStatus = this.getLoginStatus.bind(this);
  }
  handleMenuSelect(name) {
    this.setState({
      title: name
    });
  }

  componentDidMount() {
    let loginStatus = localStorage.getItem("isLogin");
    this.getLoginStatus(loginStatus);
  }

  getLoginStatus(loginStatus) {
    if (loginStatus == null) {
      localStorage.setItem("isLogin", this.state.isLogin);
    } else if (loginStatus == "true") {
      this.setState({
        isLogin: loginStatus
      });
    }
  }

  async handleLogin() {
    this.setState({
      isLogin: true
    });
    // this.setState({
    //   isLogin: loginStatus
    // });
  }

  logout() {
    localStorage.setItem("isLogin", false);
    let loginStatus = localStorage.getItem("isLogin");
    this.setState({
      isLogin: !loginStatus
    });
  }

  render() {
    return (
      <Strip className="strip" containerType="container-fiuld">
        {this.state.isLogin ? (
          <Row className="margin-0">
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className="margin-0">
              <Row>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="col-no--padding"
                  // className="pl-0 pr-0"
                >
                  <div
                    className={`${
                      this.state.isMenuCollapse
                        ? "navigation__collapse-container"
                        : "navigation-container orange-bg"
                    }`}
                  >
                    <Row>
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        // className="col-no--padding"
                      >
                        <Row className="justify-content-center padding-1px">
                          <Col
                            xs={8}
                            sm={8}
                            md={8}
                            lg={8}
                            xl={8}
                            className=" text-center"
                            // className="text-center"
                          >
                            <img src={applicationConstants.logoImg} />
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} sm={12} lg={12} xl={12} lg={12}></Col>
                    </Row>
                    <MenuNavigation
                      menuItem={menuData}
                      menuSelect={label => this.handleMenuSelect(label)}
                      isMenuCollapse={this.state.isMenuCollapse}
                    />
                  </div>
                  <div
                    className={`${
                      this.state.isMenuCollapse
                        ? "menu__collapse-container"
                        : "menu__content-container"
                    }`}
                  >
                    <Row className="margin-0">
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className={`col-no--padding orange-bg header-section__contianer ${
                          this.state.isMenuCollapse
                            ? "header-collapse-width"
                            : "header-width"
                        }`}
                      >
                        <HeaderComponent title={this.state.title} />
                      </Col>
                    </Row>
                    <Row className="margin-0">
                      <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                        className="col-no--padding pl-32px pr-32px mt-56px"
                      >
                        <RoutesComponent />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          <Login onSubmit={this.handleLogin} />
        )}
      </Strip>
    );
  }
}

export default Navigation;
