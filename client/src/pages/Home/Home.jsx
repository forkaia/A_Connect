import React, { Component } from 'react';
import { Button } from 'reactstrap'
import { FaAngleDown } from "react-icons/fa"
import homeBg from '../../images/Home/bg-home.jpg'
import './home.css'
console.log(`${homeBg} testing`)


class Home extends Component {
        constructor(props) {
                super(props);
                this.state = {}
        }
        render() {
                return (<div
                        id='home-bg'
                        className='d-flex justify-content-center'
                ><div
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
                                        className='text-white'
                                        style={{
                                                textAlign: 'center',
                                                paddingTop: '8rem'
                                        }}>
                                        A-CONNECT
                                </h1>
                                <h4 className='text-white '>Take your student-organization to the next level</h4>
                                <div>
                                        <Button className='text-white home-buttons' color="primary">Get Started</Button>
                                </div>
                                <div className='mt-2'>
                                        <Button className='home-buttons bg-white text-dark'>Log in</Button>
                                </div>
                                <div
                                        className='d-flex justify-content-end flex-column-reverse'
                                        style={{
                                                marginTop: '20%'
                                        }}
                                >
                                        <div>
                                                <strong>
                                                        <p className='text-white'>LEARN MORE</p>
                                                </strong>
                                        </div>
                                        <div>
                                                <button className='bg-none'
                                                        style={{
                                                                background: 'none',
                                                                border: 'none',

                                                        }}><FaAngleDown
                                                                className='text-white'
                                                                style={{
                                                                        width: '2rem',
                                                                        height: '2rem'
                                                                }} />
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>);
        }
}

export default Home;