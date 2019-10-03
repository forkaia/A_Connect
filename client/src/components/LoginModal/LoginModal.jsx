import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './login-modal.css'

class LoginModal extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        modal: false,
                        username: '',
                        password: ''
                };
        }

        toggle = () => {
                this.setState(prevState => ({
                        modal: !prevState.modal
                }));
        }

        handleChange = (e) => {
                this.setState({
                        [e.target.name]: e.target.value
                })
        }

        handleSubmit = (e) => {
                e.preventDefault();
                const { username, password } = this.state
                const loginInfo = {
                        username,
                        password
                }
                fetch('/users/login', {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json"
                        },
                        body: JSON.stringify(loginInfo)

                }).then((res) => res.json()).then((data) => {
                        console.log(data)
                        localStorage.setItem("token", data.token)
                }).catch((err) => {
                        if (err) {
                                alert("Incorrect username/email entry or password")
                        }
                })

        }

        render() {
                return (
                        <div>
                                <Button onClick={this.toggle} className='home-buttons bg-white text-dark'>Log in</Button>

                                <Modal isOpen={this.state.modal} toggle={this.toggle} className='d-flex mx-auto justfiy-content-center text-center'>
                                        <form onSubmit={this.handleSubmit}>
                                                <ModalHeader toggle={this.toggle}>Log In to Your Account</ModalHeader>

                                                <ModalBody>

                                                        <div>
                                                                <label className='label'>Username or Email: </label>
                                                                <input type='text' name='username' onChange={this.handleChange} />
                                                        </div>
                                                        <div>
                                                                <label className='label'>Password: </label>
                                                                <input type='text' name='password' onChange={this.handleChange} />
                                                        </div>

                                                </ModalBody>
                                                <ModalFooter className='d-flex mx-auto justfiy-content-center text-center'>
                                                        <input type='submit' className='btn btn-secondary' />
                                                        <Button onClick={this.toggle}>Cancel</Button>
                                                </ModalFooter>
                                        </form>

                                </Modal>

                        </div>
                );
        }
}

export default LoginModal;