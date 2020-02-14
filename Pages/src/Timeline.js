import React from 'react';
import { Jumbotron } from './components/Jumbotron';
import { Container } from 'react-bootstrap';
import { CardSection } from './components/CardSection';
import { CardColumns } from 'react-bootstrap/Card';
import { CardSectionTimeline } from './components/CardSectionTimeline';
import { CarouselTimeline } from './components/CarouselTimeline';



export const Timeline = () => (
    <React.Fragment>
        < CarouselTimeline />
        < CardSectionTimeline />       
    </React.Fragment>
)