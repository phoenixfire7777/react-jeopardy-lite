import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({
      formData,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };
  handleReset = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div>
          <h2> thank you for your submission</h2>
          <button type="reset" onClick={this.handleReset}>
            Reset
          </button>
        </div>
      );
    }
    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.formData.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.formData.lastName}
              onChange={this.handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
        <div>
          {this.state.formData.firstName} {this.state.formData.lastName}
        </div>
      </div>
    );
  }
}

export default Contact;
