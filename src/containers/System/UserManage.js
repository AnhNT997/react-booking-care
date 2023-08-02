import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers } from "../../services/userServices";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("all");
    if (response && response.errorCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
    // console.log("response from api", response);
  }

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <>
        <div className="users-container">
          <div className="title text-center">Manage user</div>
          <div className="users-table mt-4 mx-5">
            <table>
              <tbody>
                <tr>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
                {arrUsers &&
                  arrUsers.map((item) => {
                    return (
                      <>
                        <tr key={item.id}>
                          <td>{item.email}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.address}</td>
                          <td>
                            <button className="btn-edit">
                              <i class="fas fa-user-edit"></i>
                            </button>
                            <button className="btn-delete">
                              <i class="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        ;
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
