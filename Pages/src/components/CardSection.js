import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`

    .Card{
        font-family:"Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif;
        font-size: 16px;
    }

    .bg-primary {
        background-color: #2554C7!important;
        text-align: center;
        font-size: larger;
    }
    .border-primary {
        border-color: #2554C7!important;
        box-shadow: 0px 8px 8px 0px grey;
    }
`;

export const CardSection = () => (
    <Styles>
    <div>
        <Container>
        <CardColumns>
            <Card border="primary">
                <Card.Header class="p-3 mb-2 bg-primary text-white">Personal Information</Card.Header>
                <Card.Body>
                <Card.Title>About me</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                <Card.Title>Major</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. 
                </Card.Text>
                <Card.Title>Activities</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary">
                <Card.Header class="p-3 mb-2 bg-primary text-white">Latest Questions</Card.Header>
                <Card.Body>
                <Card.Title>Questions</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary">
                <Card.Header class="p-3 mb-2 bg-primary text-white">My Organizations</Card.Header>
                <Card.Body>
                <Card.Title>Organizations</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary">
                <Card.Header class="p-3 mb-2 bg-primary text-white">Recent Posts</Card.Header>
                <Card.Body>
                <Card.Title>Posts</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card border="primary">
                <Card.Header class="p-3 mb-2 bg-primary text-white">Friends</Card.Header>
                <Card.Body>
                <Card.Title>Friends</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardColumns>
        </Container>
    </div>
    </Styles>
)