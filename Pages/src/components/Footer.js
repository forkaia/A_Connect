  
import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, 
    Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl, Form, Container } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-12 col-sm-12">
              <h4>Follow Us</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.facebook.com/"><FaFacebook /></a>
                  <a href="https://www.twitter.com/"><FaTwitter /></a>
                  <a href="https://www.instagram.com/"><FaInstagram /></a>
                  <a href="https://www.linkedin.com/"><FaLinkedin /></a>
                </li>
              </ul>
            </div>
            </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} A_Connect - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        padding-top: 20px;
        background: white;
        color: Black;
        align: center;
    }
    .footer-middle h4{
        color: #2554C7;
        text-align: center;
    }
    .footer-middle li{
        padding-top: 10px;
        text-align: center;
    }   
    .footer-bottom {
        color: #2554C7;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: center;
    }
    li a{
      color: grey;
      font-size: 20px;
      padding: 10px;
    }

    li a: hover{
      color: #2554C7;
    }

`;