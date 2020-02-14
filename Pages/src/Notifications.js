import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Toast from 'react-bootstrap/Toast';

const Styles = styled.div`
    .toast{
        max-width: 100%;
        padding: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 2px solid grey;
    }
`

export const Notifications = () => (
    <Styles>
        <Container>
        <>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Notification</strong>
            <small>just now</small>
            </Toast.Header>
            <Toast.Body>You have a notification.</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Notification</strong>
            <small>2 seconds ago</small>
            </Toast.Header>
            <Toast.Body>You have a notification.</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Notification</strong>
            <small>4 seconds ago</small>
            </Toast.Header>
            <Toast.Body>You have a notification.</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Notification</strong>
            <small>12 seconds ago</small>
            </Toast.Header>
            <Toast.Body>You have a notification.</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Notification</strong>
            <small>12 seconds ago</small>
            </Toast.Header>
            <Toast.Body>You have a notification.</Toast.Body>
        </Toast>
        <Toast>
            <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
            <strong className="mr-auto">Notification</strong>
            <small>22 seconds ago</small>
            </Toast.Header>
            <Toast.Body>You have a notification.</Toast.Body>
        </Toast>
        </>
        </Container>
    </Styles>
)

  
