import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import getPathName from "../../utils/getPathName";

class MenuNavigation extends Component {
  constructor(props) {
    super(props);
    this.getPathName = this.getPathName.bind(this);
  }

  componentDidMount() {
    let pathName = getPathName(this.props.location.pathname);
    let menuItem = this.props.menuItem.find(item => item.link === pathName);
    if (menuItem) {
      this.props.menuSelect(menuItem.label);
    }
  }

  getPathName(name) {
    this.props.menuSelect(name);
  }

  render() {
    let pathName = getPathName(this.props.location.pathname);
    const { menuItem, isMenuCollapse } = this.props;

    return (
      <div>
        <Nav className="nav-container">
          {menuItem.map((menu, index) => (
            <NavItem
              className={`pt-8px pb-8px ${isMenuCollapse ? "active" : ""}`}
              key={index}
            >
              <Link
                to={`/${menu.link}`}
                className={`nav-link ${pathName == menu.link ? "active" : ""}`}
                onClick={() => this.getPathName(menu.label)}
              >
                {isMenuCollapse ? (
                  <img src={menu.icon} className={`${menu.iconWidth}`} />
                ) : (
                  <div className="d-flex align-items-center">
                    <img src={menu.icon} className={`${menu.iconWidth}`} />
                    <font className="pl-2 pt-1 align-middle">{menu.label}</font>
                  </div>
                )}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    );
  }
}

export default withRouter(MenuNavigation);
