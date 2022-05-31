import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raven Flores </span>
            from <span className="purple"> Philippines</span>
            <br />
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Motivated developer with experience creating custom websites with ReactJs, JavaScript, HTML5, CSS3 and Blockchain Apps using Web3.
            <br />
            
             Having excitements of writing new contract protocols using Solidity.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Trading Crypto and Stock Market
            </li>
            <li className="about-activity">
              <ImPointRight /> Eating Tasty foods
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
