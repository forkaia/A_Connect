import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const Styles = styled.div`

    .card{
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

export const CardSectionTimeline = () => (
    <Styles>
    <div>
        <Container>
        <CardColumns>
            <Card border="primary">
                <Card.Header class="p-3 mb-2 bg-primary text-white">Timeline</Card.Header>
                <Card.Body>
                <Card.Title>Timeline</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. 
                    <div style={{ width: 'auto', height: 'auto' }}>
                        <ResponsiveEmbed aspectRatio="16by9">
                            <embed type="image/svg+xml" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FForkaia%2Fposts%2F249242795802756%3A0&width=500"/>
                        </ResponsiveEmbed>
                    </div>
                </Card.Text>
                <Card.Title>Subtitle</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	                tempor incididunt ut labore et dolore magna aliqua. 
                </Card.Text>
                <Card.Title>Subtitle</Card.Title>
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
                <Card.Header class="p-3 mb-2 bg-primary text-white">Trends</Card.Header>
                <Card.Body>
                <Card.Title>Trends</Card.Title>
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
                <Card.Header class="p-3 mb-2 bg-primary text-white">Calender</Card.Header>
                <Card.Body>
                <Card.Title>Calender</Card.Title>
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
                <Card.Header class="p-3 mb-2 bg-primary text-white">Followed Hashtags</Card.Header>
                <Card.Body>
                <Card.Title>Followed Hashtags</Card.Title>
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
                <Card.Title>My Organizations</Card.Title>
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
                <Card.Header class="p-3 mb-2 bg-primary text-white">Extra Links</Card.Header>
                <Card.Body>
                <Card.Title>Extra Links</Card.Title>
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