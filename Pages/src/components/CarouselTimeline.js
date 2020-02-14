import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Styles = styled.div`

    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        margin-top: 0.5rem;
        margin-bottom: .5rem;
        font-weight: 500;
        line-height: 1.2;
    }
    .carousel-item{
        height: 300px;
    }

    .carousel{
        margin-top: 25px;
        margin-bottom: 25px;
    }    
`;

export const CarouselTimeline = () => (
    <Styles>
        <Container>

        <div className="Slideshow">
            <h3>Upcoming Events:</h3>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="http://placehold.it/200?text=1"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="http://placehold.it/200?text=2"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="http://placehold.it/200?text=3"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> 
        </div>
                    
        </Container>
    </Styles>
)

