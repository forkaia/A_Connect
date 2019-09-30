import React from 'react';
import { Col, Row } from 'reactstrap'
import { FaAngleDown } from "react-icons/fa"
import { Link } from "react-router-dom";
import homeBg from '../../images/Home/bg-home.jpg'
import LoginModal from '../../components/LoginModal'
import SignupModal from '../../components/SignupModal'
import './home.css'


const Home = () => {

        return (
                <Row>
                        <Col>
                                <div
                                        id='home-bg'
                                        className='d-flex justify-content-center'>
                                        <div
                                                className='text-center mx-auto'
                                                style={{

                                                        backgroundImage: `url(${homeBg})`,
                                                        /* Full height */
                                                        // height: "100%",

                                                        /* Center and scale the image nicely */
                                                        backgroundPosition: 'center',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover',
                                                        height: '650px',
                                                        width: '100%'
                                                }}>
                                                <h1
                                                        className='text-white intro'
                                                        style={{
                                                                textAlign: 'center',
                                                                paddingTop: '8rem'
                                                        }}>
                                                        A-CONNECT
                                </h1>
                                                <h4 className='text-white intro'>Take your student-organization to the next level</h4>
                                                <div>
                                                        <SignupModal />
                                                        {/* <Button className='text-white home-buttons' color="primary">Get Started</Button> */}
                                                </div>
                                                <div className='mt-2'>
                                                        <LoginModal />
                                                        {/* <Button className='home-buttons bg-white text-dark'>Log in</Button> */}
                                                </div>
                                                <div
                                                        className='d-flex justify-content-end flex-column-reverse'
                                                        style={{
                                                                marginTop: '20%'
                                                        }}
                                                >
                                                        <div>
                                                                <strong>
                                                                        <p className='text-white intro'>LEARN MORE</p>
                                                                </strong>
                                                        </div>
                                                        <div>
                                                                <Link
                                                                        to='/info'
                                                                >
                                                                        <button
                                                                                className='bg-none'
                                                                                href='/info'
                                                                                style={{
                                                                                        background: 'none',
                                                                                        border: 'none',

                                                                                }}><FaAngleDown
                                                                                        className='text-white intro'
                                                                                        style={{
                                                                                                width: '2rem',
                                                                                                height: '2rem'
                                                                                        }} />
                                                                        </button>
                                                                </Link>
                                                        </div>
                                                </div>
                                        </div>
                                </div></Col></Row>);
}


export default Home;