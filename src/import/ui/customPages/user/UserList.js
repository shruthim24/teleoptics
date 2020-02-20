import React from "react";
import { Table, Row, Col, Container } from "reactstrap";
// import SideBar from "../../customComponents/sideBarComponent/SideBar";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      isLoading: true,
      errors: null
    };
    this.userList = this.userList.bind(this);
  }
  componentDidMount() {
    this.userList();
  }
  userList = async () => {
    const token = await localStorage.getItem("token");
    fetch("http://3.6.238.90:5002/api/v1/getUsers", {
      method: "get",
      headers: {
        Accept: "application/json",
        token: `${token}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(Response => Response.json())
      .then(result => {
        console.log(result);
        if (result.Status === 1) alert("Error");
        else {
          this.setState({
            usersList: result.data
          });
        }
      });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table striped bordered size="sm">
              <thead className="orange-bg text-white">
                <tr>
                  <th>Login Id</th>
                  <th>Full Name</th>
                  <th>Mobile</th>
                  <th>Gender</th>
                  <th>Role Id</th>
                </tr>
              </thead>
              {this.state.usersList.length > 0 ? (
                <tbody>
                  {this.state.usersList.map(item => (
                    <tr>
                      <td>{item.loginId}</td>
                      <td>{item.fullName}</td>
                      <td>{item.mobileNumber}</td>
                      <td>
                        {item.gender === 0
                          ? "Male"
                          : (item.gender = 1 ? "Female" : "Others")}
                      </td>
                      <td>
                        {item.roleId === 0
                          ? "Admin"
                          : (item.roleId = 1
                              ? "Optometrist "
                              : (item.roleId = 2
                                  ? "Doctor at Camp"
                                  : (item.roleId = 3
                                      ? "Doctor at Tele"
                                      : (item.roleId = 4
                                          ? "Junior Reader"
                                          : (item.roleId = 5
                                              ? "Senior Reader"
                                              : "Project Reader")))))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <p>No Data Found</p>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserList;
