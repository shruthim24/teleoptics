import React from "react";
import { Table, Row, Col, Container } from "reactstrap";
// import SideBar from "../../customComponents/sideBarComponent/SideBar";

class CampList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campsList: [],
      isLoading: true,
      errors: null
    };
    this.campList = this.campList.bind(this);
    this.getCampItem = this.getCampItem.bind(this);
  }
  componentDidMount() {
    this.campList();
  }

  campList = async () => {
    const token = await localStorage.getItem("token");
    fetch("http://3.6.238.90:5002/api/v1/getCamps", {
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
        // debugger;
        // console.log("___________");
        console.log(result);
        if (result.code === 1) alert("Error");
        else {
          this.setState({
            campsList: result.data
          });
        }
        // this.props.history.push("/Dashboard");
      });
  };

  getCampItem = (item, index) => {
    console.log("_________", item, index);
    this.props.handleModal(item);
  };

  render() {
    console.log("__________", this.state.campsList);

    return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Table striped bordered size="sm">
              <thead className="orange-bg text-white">
                <tr>
                  <th>Camp ID</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Camp Status</th>
                </tr>
              </thead>
              {this.state.campsList.length > 0 ? (
                <tbody>
                  {this.state.campsList.map((item, index) => (
                    <tr
                      onClick={() => this.getCampItem(item, index)}
                      key={index}
                    >
                      <td>{item.campCode}</td>
                      <td>{item.location}</td>
                      <td>{item.date}</td>
                      <td>
                        {item.campStatus}-
                        {item.campStatus == 0 ? "Inactive" : "Active"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tr>
                  <td>No data found</td>
                </tr>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CampList;
