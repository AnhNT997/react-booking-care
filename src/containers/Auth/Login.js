import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import "./Login.scss";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }
  handleChangeLoginInput = (event) => {
    let value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    });
  };
  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  handleLoginButtonOnclick = () => {
    console.log(
      "UserName: ",
      this.state.username,
      "  Password:",
      this.state.password
    );
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login ">Login</div>
            <div className="col-12 from-group login-input">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={(event) => this.handleChangeLoginInput(event)}
                placeholder="Enter your username"
              />
            </div>
            <div className="col-12 from-group login-input password">
              <label>Password</label>
              <div>
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={(event) => this.handleChangeLoginInput(event)}
                  placeholder="Enter your password"
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <i
                    className={
                      this.state.isShowPassword
                        ? "far fa-eye"
                        : "far fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLoginButtonOnclick();
                }}
              >
                Login
              </button>
            </div>

            <div className="col-12 forgot-password">
              <span>Forgot your password</span>
            </div>
            <div className="col-12 form-group other-login">
              <div className="mb-2">Or login with</div>
              <div className="other-login-method">
                <i className="fab fa-google-plus"></i>
                <i className="fab fa-facebook"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
