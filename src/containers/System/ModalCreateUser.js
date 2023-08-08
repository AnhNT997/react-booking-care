import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import axios from "axios";
import { handleApiCreateUser } from "../../services/userServices";
import "./ModalCreateUser.scss";
class ModalCreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
    };
  }
  toggle = () => {
    this.setState({
      errorMessage: "",
    });
    this.props.toggleFromParent();
  };
  handleCreateUser = () => {
    let { errorMessage, ...data } = this.state;
    console.log(data);
    let validate = this.handleValidateInput(data);
    if (validate) {
      this.props.handleCreateNewUser(data);
    }
  };
  handleValidateInput = (data) => {
    let dataInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
    ];
    let validate = true;
    for (let index = 0; index < dataInput.length; index++) {
      let element = dataInput[index];
      console.log(element);
      if (!data[element]) {
        alert(`missing require field: ${element}`);
        validate = false;
        break;
      }
    }
    return validate;
  };
  handleFormInputChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };
  componentDidMount() {}

  render() {
    let errorMessage = this.state.errorMessage;
    return (
      <>
        <Modal
          isOpen={this.props.isOpen}
          toggle={() => this.toggle()}
          size="lg"
        >
          <ModalHeader toggle={() => this.toggle()}>
            Create New User
          </ModalHeader>
          <ModalBody>
            <div className="body-container">
              <div className="form-item">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  id="email"
                  onChange={(event) => this.handleFormInputChange(event)}
                ></input>
              </div>
              <div className="form-item">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  id="password"
                  onChange={(event) => this.handleFormInputChange(event)}
                ></input>
              </div>
              <div className="form-item">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  id="firstName"
                  onChange={(event) => this.handleFormInputChange(event)}
                ></input>
              </div>
              <div className="form-item">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  id="lastName"
                  onChange={(event) => this.handleFormInputChange(event)}
                ></input>
              </div>
              <div className="form-item">
                <label htmlFor="email">Address</label>
                <input
                  type="text"
                  name="address"
                  value={this.state.address}
                  id="address"
                  onChange={(event) => this.handleFormInputChange(event)}
                ></input>
              </div>
              <div className="form-item">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  id="phoneNumber"
                  onChange={(event) => this.handleFormInputChange(event)}
                ></input>
              </div>
            </div>
            {errorMessage && <div>{errorMessage}</div>}
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              className="btn px-2"
              onClick={() => this.handleCreateUser()}
            >
              Create user
            </Button>
            <Button
              color="secondary"
              className="btn px-2"
              onClick={() => this.toggle()}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateUser);
