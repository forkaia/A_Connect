import React from 'react';
import { Container, Col, Row, Button, CardImg } from 'reactstrap'
import Coffee from '../../images/Info/coffee.png'
import Refund from '../../images/Info/refund.png'
import Connect from '../../images/Info/connect.png'
import Time from '../../images/Info/time.png'
import DoubleCheck from '../../images/Info/doublecheck.png'



const Info = () => {

        return (
                <div
                        style={{
                                backgroundColor: '#213387',
                                height: '620px'
                        }}
                >
                        <Container fluid className='justify-content-around d-flex'
                                style=
                                {{


                                        paddingTop: '8rem'

                                }}>

                                {icons.map((item) =>
                                        <Row>
                                                <Col>
                                                        <Button
                                                                color='none'
                                                        >
                                                                <CardImg
                                                                        className='text-white'
                                                                        src={item.src}
                                                                        alt={item.alt}
                                                                        style={{
                                                                                height: '100px',
                                                                                width: '100px'
                                                                        }}
                                                                />
                                                        </Button>
                                                </Col>
                                        </Row>
                                )}
                        </Container>
                        <div className='mt-5'>
                                <h2 className='text-center text-white'>A-Connection makes your organization-experience</h2>
                                <h2 className='text-center text-white'>more fun everywhere and anytime.</h2>
                                <h6 className='text-center text-white'>Being part of a student organization is a must-do! It is a unique experience which everyone desires.</h6>
                                <h6 className='text-center text-white'>However, we know that the experience might get boring or unenjoyable if things are not organized well,</h6>
                                <h6 className='text-center text-white'>or if organization members are not harmonious. With A-Connect, you will make the best out of your organization</h6>
                        </div>
                </div>
        );
}

const icons = [
        {
                src: Coffee,
                alt: 'coffee',
                id: 'coffee_pic'
        },
        {
                src: Refund,
                alt: 'refund',
                id: 'refund_pic'
        },
        {
                src: Connect,
                alt: 'connect',
                id: 'connect_pic'
        },
        {
                src: Time,
                alt: 'time',
                id: 'time_pic'
        },
        {
                src: DoubleCheck,
                alt: 'double check',
                id: 'double_check_pic'
        }
]

export default Info;


{/* <Container fluid className='justify-content-around d-flex' style={{
                        backgroundColor: '#213387',
                        height: '1000px'
                }}>
                        <Row
                                style={{
                                        marginTop: '6rem'
                                }}
                        >
                                <Col >
                                        <Button
                                                color='none'

                                        >
                                                <CardImg

                                                        src={Coffee}
                                                        alt='coffee'
                                                        style={{
                                                                height: '100px',
                                                                width: '100px'

                                                        }} />
                                        </Button>
                                </Col>

                                <Col>

                                        <Button color='none'>
                                                <CardImg
                                                        src={Refund}
                                                        alt='refund'
                                                        style={{
                                                                height: '100px',
                                                                width: '100px',
                                                                background: "transparent"
                                                        }} />
                                        </Button>
                                </Col>

                                <Col>

                                        <Button color='none'>
                                                <CardImg
                                                        src={Connect}
                                                        alt='connect'
                                                        style={{
                                                                height: '100px',
                                                                width: '100px',
                                                                background: "transparent"
                                                        }} />

                                        </Button>
                                </Col>

                                <Col>

                                        <Button color='none'>
                                                <CardImg
                                                        src={Time}
                                                        alt='time'
                                                        style={{
                                                                height: '100px',
                                                                width: '100px',
                                                                background: "transparent"
                                                        }} />

                                        </Button>
                                </Col>

                                <Col>

                                        <Button color='none'>
                                                <CardImg
                                                        src={DoubleCheck}
                                                        alt='double check mark'
                                                        style={{
                                                                height: '100px',
                                                                width: '100px',
                                                                background: "transparent"
                                                        }} />

                                        </Button>
                                </Col>
                        </Row>
                </Container> */}




