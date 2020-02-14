import React from 'react';
import { Nav, Navbar,NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, 
    Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Form, Container } from 'react-bootstrap';
import styled from 'styled-components';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import logo from '../assets/logo.jpg';
import { FaHome, FaGlobe, FaBell, FaUser, FaSignOutAlt } from 'react-icons/fa'
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { MdTimeline } from 'react-icons/md';


const Styles = styled.div`

    .Bar{
        background-color: #2554C7; 
        font-family:"Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif;
    }

    .navbar{
        background-color: #2554C7;   
    }

    @media (min-width: 1020px){
        .form-inline {
            margin-left: 50px;
        }
    }

    @media (min-width: 1020px){
      .form-inline .form-control 
      {
        display: inline-block;
        width: 300px;
        vertical-align: middle;
        }  
    }


    .navbar-expand-lg .navbar-nav .dropdown-menu {
        margin-top: 12px;
    }
    .navbar-brand{
        float: left;
    }

    .nav-item{
        padding-left: 10px;
        padding-right: 10px;
    }
    .navbar-light .navbar-nav .nav-link {
        color: #f8f9fa;
    }
`;

export const NavigationBar = () => (
    <Styles>
        <div className="Bar">
            <Container>
                <Navbar expand="lg" align="center">
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt="A_Connect logo"
                        />
                    </Navbar.Brand>
                    <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/"><FaHome/> Home </Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/MyOrganizations"><FaGlobe/> My Organizations </Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/Notifications"><FaBell/> Notifications </Nav.Link></Nav.Item>
                            <NavDropdown title={<span ><i className="User"></i> <FaUser/> My Account </span>} id="basic-nav-dropdown"> 
                                <NavDropdown.Item href="/"><FaUser/> My Profile </NavDropdown.Item>
                                <NavDropdown.Item href="/Timeline"><MdTimeline/> My Timeline </NavDropdown.Item>
                                <NavDropdown.Item href="/"><FiSettings/> Settings </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/"><FiLogOut/> Logout </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>                        
            </Container>
        </div>
    </Styles>
)