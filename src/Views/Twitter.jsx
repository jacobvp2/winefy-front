import React, { useState } from 'react'
import { Link, useParams, useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import Navigation from '../Components/Navigation'

const Twitter = ({ username, setUsername }) => {

    const updateUsername = (e) => {
        setUsername(e.target.value)
    }

    const history = useHistory();

    const api = Axios.create({
        timeout: 50000,
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
        "X-Requested-With": "XMLHttpRequest",
      });
    Axios.defaults.baseURL = "http://127.0.0.1:5000/"

    const getPersonality = (handle) => {
        if (handle.substring(0,1) === '@') {
            handle = handle.substring(1);
        }
        let personality = "INFP"
        api.post('/tweet_pred', {
            'handle': handle
        }).then((res) => {
            personality = res.data.type
        }).catch((err) => {
            console.log(err)
        }).then(() => {
            history.push(`/results/${personality}`)
        });
    }

    return (
        <div>
            <Navigation />
            <div className='d-flex justify-content-center vh-100'>
                <div className='align-self-center pb-5'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>Input Your Twitter Handle</Card.Title>
                        <Form onChange={updateUsername}>
                            <Form.Group>
                                <Form.Label>Twitter Handle:</Form.Label>
                                <Form.Control type="text" placeholder="@johndoe123" value={username}/>
                            </Form.Group>
                        </Form>
                        <div className='d-flex justify-content-between'>
                            <Link to='/choice'><Button variant="outline-danger" size='sm'>Back</Button></Link>
                            <Button variant="primary" size='sm' onClick={() => getPersonality(username)}>Submit</Button>
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Twitter
