import React from 'react';
import './Profile.css';
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Container,
  Col,
  Row
} from 'reactstrap';

function Profiles() {
  return (
    <Container id="profile">
      <Row id="profiles">
        <Col lg="4">
          <Card>
            <CardImg
              top
              src="https://ca.slack-edge.com/T6SG2QGG2-UHRJLPC0L-ebab15075c82-512"
              alt="Profile Picture"
              className="rounded-circle"
            />
            <CardBody>
              <CardTitle>Dajung Kim</CardTitle>
              <CardSubtitle><em>former accountant</em></CardSubtitle>
              <div className="card-content">
                <div className="description">
                  <CardText className="description">
                    I'm Jenna from South Korea. Traveled Singapore, Australia and now I'm here in Germany. I like to travel & coding!
                </CardText>
                </div>
                <div className="social">
                  <a href="https://github.com/jenna1k" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://twitter.com/JennaDJK" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-twitter-square" />
                  </a>
                  <a href="https://www.linkedin.com/in/kim-jenna-4292b0132/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card>
            <CardImg
              top
              src="https://ca.slack-edge.com/T6SG2QGG2-UHS6APYKF-859fb9d29181-512"
              alt="Profile Picture"
              className="rounded-circle"
            />
            <CardBody>
              <CardTitle>Anastasiya Aliashkevich</CardTitle>
              <CardSubtitle><em>former QA</em></CardSubtitle>
              <div className="card-content">
                <div className="description">
                  <CardText className="description">
                    My name is Anastasiya and I'm from Belarus - a country with economy and national idea being potato. I like to solve puzzles, code stuff and also I love computer games.
                </CardText>
                </div>
                <div className="social">
                  <a href="https://github.com/aliashkevich" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-twitter-square" />
                  </a>
                  <a href="https://www.linkedin.com/in/anastasiya-aliashkevich-941091a0/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg="4">
          <Card>
            <CardImg
              top
              src="https://ca.slack-edge.com/T6SG2QGG2-UHTT5TD2T-5bf3a1b22743-512"
              alt="Profile Picture"
              className="rounded-circle"
            />
            <CardBody>
              <CardTitle>Bernadetta Nycz</CardTitle>
              <CardSubtitle><em>former stylist</em></CardSubtitle>
              <div className="card-content">
                <div className="description">
                  <CardText className="description">
                    I’m Bernadetta, currently on the journey to translate my love for art, fashion and tech into digital reality. I enjoy sun, skateboarding and espresso.
                </CardText>
                </div>
                <div className="social">
                  <a href="https://github.com/Hiiiij" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-github" />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profiles;
