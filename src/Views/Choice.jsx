import React from 'react'
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navigation from '../Components/Navigation'
import { questionBank } from '../Util/QuizBank';

const Choice = () => {
    return (
        <div>
            <Navigation/>
            <div className="heading2-choice">Which option would you prefer?</div>
            <div className='d-flex justify-content-around vh-100 container flex-wrap'>
            
                <div className='align-self-center pb-5'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Take the Quiz!</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{questionBank.length} Multiple Choice Questions</Card.Subtitle>
                        <Card.Text>Take a short quiz to find what wine suits you the best based on your personality!</Card.Text>
                        <Link to='/quiz/1'><Button variant="primary" className='float-right'>Go!</Button></Link>
                    </Card.Body>
                </Card>
                </div>
                <div className='align-self-center pb-5'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Use your Twitter!</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">How does this work?</Card.Subtitle>
                        <Card.Text>Our algorithm determines your personality based on your public tweets. It then determines what wine you would enjoy the best! Note: We do not collect or store your information.</Card.Text>
                        <Link to='/twitter'><Button variant="primary" className='float-right'>Go!</Button></Link>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Choice
