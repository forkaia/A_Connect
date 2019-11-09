import React from "react";
import { Container, Row, CardImg, Col } from "reactstrap";
import MorePic from "../../../images/More/more.jpg";

const More = () => {
  return (
    <div
      className="d-flex justify-content-center text-center mx-auto text-center text-white"
      style={{
        backgroundColor: "#663399",
        height: "100%"
      }}
    >
      <Container>
        <Row
          className="text-center mx-auto"
          style={{
            paddingTop: "6rem"
          }}
        >
          <Col>
            <div>
              <h2>Never miss any upcoming event again.</h2>
            </div>
          </Col>
        </Row>
        <Row
          className="text-center mx-auto"
          style={{
            paddingBottom: "3rem"
          }}
        >
          <Col>
            <div>
              <p>Everyone misses their organization events from time to time</p>
              <p>because they forget about it or even did not know about</p>
              <p>this upcoming event. But no worries! You will never miss</p>
              <p>any events with A-Connect.</p>
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <CardImg
            src={MorePic}
            alt="Previews the Application"
            style={{
              width: "100%"
            }}
          />
        </Row>
      </Container>
    </div>
  );
};

export default More;
