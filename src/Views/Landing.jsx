import React from 'react'
import { Link } from "react-router-dom";
import Navigation from '../Components/Navigation'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Landing = () => {
    return (
        <div>
            <Navigation />
           <div className="landing-welcome">
           <Container>
              <Row>
                <Col>Welcome to Winefy</Col>
              </Row>
              </Container>
              </div>
              <div className="landing-sub">
            <Container>
              <Row>
                <Col>We aim to help our audience discover wines that best suit their lifestyle in a manner that is fun, informative, and secure.</Col>
              </Row>
           </Container>
           </div>
           <div >
                    <Container>
                    <Row className="justify-content-md-center">
                        <Link to='/choice'><Button variant="primary" size="lg">
                    Find Your Wine!
                    </Button>{' '}</Link>
                    </Row>
                    </Container>
                    </div>
         <div className="bkg-grey">

         <Container>
            <Row>
            <Col className="heading2">Our Goals</Col>
            </Row>
            <Row className="row-spacer">
            <Col>We hope for our proposed technology to deliver a fun and unique experience for users within our target audience. Our goal is to provide users with wine recommendations that relate to their personality and lifestyle in a whimsical manner.</Col>
            </Row>
            <Row className="row-spacer">
            <Col>Another goal of ours is to achieve algorithmic transparency and secure data protection for all users. We want our audience to feel safe and secure when using our wine recommendation system.</Col>
            </Row>
            <Row className="row-spacer">
            <Col>We want to achieve a successful implementation of social media scraping. This will allow us to provide even more personalized recommendations.</Col>
            </Row>
            <Row>
            <Col>We hope to also use our platform and website as a means of wine education for our users. We want to provide insightful and informative content so that users who are new to the wine category can familiarize themselves and delve into wine fundamentals. We essentially want to create a one-stop shop for all things wine related.</Col>
            </Row>
         </Container>
         </div>


        </div>
    )
}

export default Landing
