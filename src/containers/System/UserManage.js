import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import {
  getAllUsers,
  handleApiCreateUser,
  handleApiDeleteUser,
} from "../../services/userServices";
import ModalCreateUser from "./ModalCreateUser";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModal: false,
    };
  }

  async componentDidMount() {
    this.handleLoadUsersData();
    // console.log("response from api", response);
  }
  handleLoadUsersData = async () => {
    let response = await getAllUsers("all");
    if (response && response.errorCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  handleOpenModalCreateUser = () => {
    this.setState({
      isOpenModal: true,
    });
  };

  toggleCreateUserModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };

  handleCreateNewUser = async (data) => {
    let resp = await handleApiCreateUser(data);
    if (resp.errorCode === 0) {
      this.setState({
        errorMessage: resp.message,
      });
      this.handleLoadUsersData();
      alert("Create user success");
      this.setState({
        isOpenModal: false,
      });
    } else {
      alert("Error! " + resp.message);
    }
  };
  handleDeleteUser = async (userDeleteId) => {
    let resp = await handleApiDeleteUser(userDeleteId);
    alert(resp.message);
    this.handleLoadUsersData();
  };
  handleEditUser = async (userEditId) => {
    this.setState({
      isOpenModal: true,
      isEditUser: true,
    });
  };
  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <>
        <div className="users-container">
          <div className="title text-center">Manage user</div>
          <div className="users-table mt-4 mx-5">
            <div className="my-3">
              <button
                className="btn btn-primary px-3"
                onClick={() => this.handleOpenModalCreateUser()}
              >
                <i className="fas fa-plus"></i> Add new user
              </button>
            </div>
            <ModalCreateUser
              isOpen={this.state.isOpenModal}
              toggleFromParent={this.toggleCreateUserModal}
              handleCreateNewUser={this.handleCreateNewUser}
            ></ModalCreateUser>
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {arrUsers &&
                  arrUsers.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.email}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.address}</td>
                        <td>
                          <button
                            className="btn-edit"
                            onClick={() => this.handleEditUser(item.id)}
                          >
                            <i className="fas fa-user-edit"></i>
                          </button>
                          <button
                            className="btn-delete"
                            onClick={() => this.handleDeleteUser(item.id)}
                          >
                            <i className="fas fa-trash"></i>
                          </button>
                        </td>
                      </tr>
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
