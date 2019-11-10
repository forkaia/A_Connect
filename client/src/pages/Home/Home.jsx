import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import homeBg from "../../images/Home/bg-home.jpg";
import LoginModal from "../../components/LoginModal";
import SignupModal from "../../components/SignupModal";
import AuthHelperMethods from "../../components/Auth/AuthHelperMethods";
import "./home.css";

// Create a new instance of the 'AuthHelperMethods' component
const Auth = new AuthHelperMethods();

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: {
  //       name: "",
  //       email: "",
  //       username: ""
  //     }
  //   };
  // }
  render() {
    return (
      <Row>
        <Col>
          <div id="home-bg" className="d-flex justify-content-center">
            <div
              className="text-center mx-auto"
              style={{
                backgroundImage: `url(${homeBg})`,
                /* Full height */
                // height: "100%",

                /* Center and scale the image nicely */
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "650px",
                width: "100%"
              }}
            >
              <h1
                className="text-white intro"
                style={{
                  textAlign: "center",
                  paddingTop: "8rem"
                }}
              >
                A-CONNECT
              </h1>
              <h4 className="text-white intro">
                Take your student-organization to the next level
              </h4>
              <div>
                <SignupModal />
                {/* <Button className='text-white home-buttons' color="primary">Get Started</Button> */}
              </div>
              <div className="mt-2">
                <LoginModal
                  history={this.props.history}
                  user={this.props.user}
                />
                {/* <Button className='home-buttons bg-white text-dark'>Log in</Button> */}
              </div>
              <button
                onClick={() => {
                  Auth.logout();
                  this.props.history.replace("/");
                }}
              >
                LOGOUT
              </button>
              <Link to={"/protected/"}>
                <button>Protected route</button>
              </Link>
              <div
                className="d-flex justify-content-end flex-column-reverse"
                style={{
                  marginTop: "20%"
                }}
              >
                <div>
                  <strong>
                    <p className="text-white intro">LEARN MORE</p>
                  </strong>
                </div>
                <div>
                  <Link to="/info">
                    <button
                      className="bg-none"
                      href="/info"
                      style={{
                        background: "none",
                        border: "none"
                      }}
                    >
                      <FaAngleDown
                        className="text-white intro"
                        style={{
                          width: "2rem",
                          height: "2rem"
                        }}
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Home;
