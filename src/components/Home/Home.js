import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dev.svg";
import SocialMedia from "../SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Raven Flores</strong>
              </h1>

              
              <p className="heading-description blockquote">I was born and raised in Phillipines, a breeding area of technology and innovation. I first started programming at the age of 13.</p>
              <p className="heading-description blockquote">I graduated from Polytechnic University of the Philippines Santa Maria Bulacan</p> 
              <p className="heading-description blockquote">I know I'm new to this field. I write bunch of codes do the logics and stuffs. but for me it's time to step up and work with the professionals.</p> 
              <div className="heading-type">
                <TypeWriter />
              </div> 
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
