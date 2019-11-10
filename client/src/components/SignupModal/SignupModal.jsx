import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class SignupModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      username: "",
      password: "",
      name: ""
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, username } = this.state;
    const newUser = {
      name,
      email,
      password,
      username
    };
    //     console.log(newUser);
    fetch("/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(() => {
        alert("You Have Successfully Created an Account!");
        this.toggle();
        // redirects user to login page
        this.props.history.replace("/");
        // window.location.reload();
      })
      .catch(err => {
        alert("There was an Error in Creating Your Account. Please try again.");
        throw err;
      });
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.toggle}
          className="text-white home-buttons"
          color="primary"
        >
          Get Started
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="d-flex mx-auto justfiy-content-center text-center"
        >
          <form onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggle}>Create an Account</ModalHeader>
            <ModalBody>
              <div>
                <label className="label">Email: </label>
                <input type="text" name="email" onChange={this.handleChange} />
              </div>
              <div>
                <label className="label">Username: </label>
                <input
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label className="label">Password: </label>
                <input
                  type="text"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label className="label">Name: </label>
                <input type="text" name="name" onChange={this.handleChange} />
              </div>
            </ModalBody>
            <ModalFooter className="d-flex mx-auto justfiy-content-center text-center">
              <input type="submit" className="btn btn-secondary" />
              <Button onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SignupModal;
