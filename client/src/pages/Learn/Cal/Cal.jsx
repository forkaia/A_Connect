import React from "react";
import { Container, Col, Row, CardImg } from "reactstrap";
import CalPic from "../../../images/Cal/cal.jpg";
// import CalPic from '../../images/Cal/cal.jpg'

const Cal = () => {
  return (
    <div className="text-white" style={{ backgroundColor: "#1E90FF" }}>
      <Container>
        <Row>
          <Col>
            <CardImg
              src={CalPic}
              alt="Calendar Picture"
              style={{
                height: "100%"
              }}
            />
          </Col>
          <Col>
            <div
              style={{
                paddingTop: "8rem",
                paddingBottom: "8rem"
              }}
            >
              <h2>Never miss any upcoming event again.</h2>
              <p>Everyone misses their organization events from time to time</p>
              <p>because they forget about it or even did not know about</p>
              <p>this upcoming event. But no worries! You will never miss</p>
              <p>any events with A-Connect.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cal;
