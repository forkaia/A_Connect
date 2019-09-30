import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class SignupModal extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        modal: false,
                        email: '',
                        username: '',
                        password: '',
                        name: ''
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
                console.log('Submitted')
        }

        render() {
                return (
                        <div>
                                <Button onClick={this.toggle} className='text-white home-buttons' color="primary">Get Started</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className='d-flex mx-auto justfiy-content-center text-center'>
                                        <ModalHeader toggle={this.toggle}>Create an Account</ModalHeader>
                                        <ModalBody>
                                                <form>
                                                        <div>
                                                                <label className='label'>Email: </label>
                                                                <input type='text' name='email' onChange={this.handleChange} />
                                                        </div>
                                                        <div>
                                                                <label className='label'>Username: </label>
                                                                <input type='text' name='username' onChange={this.handleChange} />
                                                        </div>
                                                        <div>
                                                                <label className='label'>Password: </label>
                                                                <input type='text' name='password' onChange={this.handleChange} />
                                                        </div>
                                                        <div>
                                                                <label className='label'>Name: </label>
                                                                <input type='text' name='name' onChange={this.handleChange} />
                                                        </div>
                                                </form>
                                        </ModalBody>
                                        <ModalFooter className='d-flex mx-auto justfiy-content-center text-center'>
                                                <input onSubmit={this.handleSubmit} type='submit' className='btn btn-secondary' />
                                                <Button onClick={this.toggle}>Cancel</Button>
                                        </ModalFooter>
                                </Modal>
                        </div>
                );
        }
}

export default SignupModal;