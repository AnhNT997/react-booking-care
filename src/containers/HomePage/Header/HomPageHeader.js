import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./HomPageHeader.scss";
import { LANGUAGES } from "../../../utils/constant";
import { changeAppLanguage } from "../../../store/actions/appActions";
class HomPageHeader extends Component {
  changeLanguage = (language) => {
    this.props.reduxChangeAppLanguage(language);
  };
  render() {
    let curLanguage = this.props.language;
    return (
      <>
        <div className="top-nav-container">
          <div className="top-nav-content">
            <div className="left-content">
              <i className="fas fa-bars"></i>
              <div className="logo"></div>
            </div>
            <div className="center-content">
              <div className="item-content">
                <div className="title">
                  <FormattedMessage id="home-header.speciality" />
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.find-doctor" />
                </div>
              </div>
              <div className="item-content">
                <div className="title">
                  <FormattedMessage id="home-header.health-facility" />
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.choose-clinnic-hospital" />
                </div>
              </div>
              <div className="item-content">
                <div className="title">
                  <FormattedMessage id="home-header.doctor" />
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.choose-good-doctor" />
                </div>
              </div>
              <div className="item-content">
                <div className="title">
                  <FormattedMessage id="home-header.examination-package" />
                </div>
                <div className="sub-title">
                  <FormattedMessage id="home-header.general-health-check" />
                </div>
              </div>
            </div>
            <div className="right-content">
              <div className="support">
                <i className="fas fa-question-circle"></i>
                <FormattedMessage id="home-header.support" />
              </div>
              <div className="language">
                <span
                  className={curLanguage === "vi" ? "active" : ""}
                  onClick={() => this.changeLanguage(LANGUAGES.VI)}
                >
                  VI
                </span>
                <span
                  className={curLanguage === "en" ? "active" : ""}
                  onClick={() => this.changeLanguage(LANGUAGES.EN)}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-container">
          <div className="banner-content">
            <div className="banner-title">
              <h1>
                <FormattedMessage id="banner.title1" />
                <br />
                <b>
                  <FormattedMessage id="banner.title2" />{" "}
                </b>
              </h1>
            </div>
            <div className="banner-search-bar">
              <div className="search-bar">
                <i className="fas fa-search"></i>
                <input type="text" />
              </div>
            </div>
            <div className="banner__options">
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-hospital"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-1" />{" "}
                </div>
              </div>
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-mobile"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-2" />{" "}
                </div>
              </div>
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-notes-medical"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-3" />{" "}
                </div>
              </div>
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-vial"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-4" />{" "}
                </div>
              </div>
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-5" />{" "}
                </div>
              </div>
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-pills"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-6" />{" "}
                </div>
              </div>
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-file-medical"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-7" />{" "}
                </div>
              </div>
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-prescription-bottle-alt"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-8" />{" "}
                </div>
              </div>
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-file-medical"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-9" />{" "}
                </div>
              </div>
              <div className="banner__options-item">
                <div className="icon_container">
                  <i className="fas fa-clinic-medical"></i>
                </div>
                <div className="item_title">
                  <FormattedMessage id="banner.option-10" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxChangeAppLanguage: (language) => dispatch(changeAppLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomPageHeader);
