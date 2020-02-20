import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "../../dashboard/Dashboard";
import CampList from "../../camp/CampList";
import AddCamp from "../../camp/AddCamp";
import AddUser from "../../user/AddUser";
import UserList from "../../user/UserList";

class RoutesComponent extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    let pathName = this.props;
    console.log("r", pathName);
    return (
      <div>
        <Switch>
          <Route exact name="AddCamp" path="/AddCamp" component={AddCamp} />
          <Route
            exact
            name="dashboard"
            path="/dashboard"
            component={Dashboard}
          />
          <Route exact name="AddUser" path="/AddUser" component={AddUser} />
          {/* <Route exact name="CampList" path="/AddCamp" component={AddCamp} /> */}
          <Route
            exact
            name="Dashboard"
            path="/Dashboard"
            component={Dashboard}
          />
          <Route
            exact
            name="ChangePassword"
            path="/Dashboard"
            component={Dashboard}
          />
          {/* <Route exact name="Logout" path="/Dashboard" component={Dashboard} /> */}
        </Switch>
      </div>
    );
  }
}

export default RoutesComponent;
