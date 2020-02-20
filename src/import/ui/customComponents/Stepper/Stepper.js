import React, { Component } from "react";
import Stepper from "react-stepper-horizontal";
import Registration from "../../customPages/dashboard/component/Registration";
import HealthDetails from "../../customPages/dashboard/component/HealthDetails";
import Refraction from "../../customPages/dashboard/component/Refraction";
import ImageGrading from "../../customPages/dashboard/component/ImagingGrading";
// import Stepper from '../src/index.js';

class CustomStepper extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        {
          title: "Registration"
          // href: "http://example1.com",
          // onClick: e => {
          //   e.preventDefault();
          //   console.log("onClick", 1);
          // }
        },
        {
          title: "Health Info"
          // href: "#",
          // onClick: e => {
          //   e.preventDefault();
          //   console.log("onClick", 2);
          // }
        },
        {
          title: "Refraction"
          // href: "http://example3.com",
          // onClick: e => {
          //   e.preventDefault();
          //   console.log("onClick", 3);
          // }
        },
        {
          title: "Image & Grading"
          // href: "http://example4.com",
          // onClick: e => {
          //   e.preventDefault();
          //   console.log("onClick", 4);
          // }
        }
      ],
      currentStep: 0
    };
    this.renderComponent = this.renderComponent.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
  }

  async onClickNext() {
    const { steps, currentStep } = this.state;
    await this.setState({
      currentStep: currentStep + 1
    });
  }

  async onClickPrev() {
    debugger;
    const { steps, currentStep } = this.state;
    await this.setState({
      currentStep: currentStep - 1
    });
  }

  renderComponent = () => {
    if (this.state.currentStep === 0) {
      return <Registration onNext={this.onClickNext} />;
    } else if (this.state.currentStep === 1) {
      return (
        <HealthDetails onNext={this.onClickNext} onPrev={this.onClickPrev} />
      );
    } else if (this.state.currentStep === 2) {
      return <Refraction onNext={this.onClickNext} onPrev={this.onClickPrev} />;
    } else if (this.state.currentStep === 3) {
      return (
        <ImageGrading onNext={this.onClickNext} onPrev={this.onClickPrev} />
      );
    }
  };
  render() {
    const { steps, currentStep } = this.state;
    const buttonStyle = {
      background: "#E0E0E0",
      width: 200,
      padding: 16,
      textAlign: "center",
      margin: "0 auto",
      marginTop: 32
    };
    return (
      <div>
        <Stepper steps={steps} activeStep={currentStep} />
        {/* <hr /> */}
        <div>{this.renderComponent()}</div>
        {/* <div style={buttonStyle} onClick={this.onClickNext}>
          Next
        </div> */}
      </div>
    );
  }
}

// ReactDOM.render(<App />, document.getElementById('content'));
export default CustomStepper;
