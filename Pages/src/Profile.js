import React from 'react';
import { Jumbotron } from './components/Jumbotron';
import { Container } from 'react-bootstrap';
import { CardSection } from './components/CardSection';
import { CardColumns } from 'react-bootstrap/Card';


export const Profile = () => (
    <React.Fragment>
        <Jumbotron />
        <CardSection />            
    </React.Fragment>
)