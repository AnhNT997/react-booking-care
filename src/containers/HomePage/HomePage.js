import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomPageHeader from "./Header/HomPageHeader";
class HomePage extends Component {
  render() {
    return (
      <>
        <HomPageHeader />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
