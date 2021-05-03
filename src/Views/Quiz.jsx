import React from 'react'
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navigation from '../Components/Navigation'
import { questionBank } from '../Util/QuizBank'

const Quiz = ({ answers, setAnswers }) => {
    let { id } = useParams();
    const updateAnswers = (e) => {
        setAnswers((old) => ({
            ...old,
            [id]: e.target.value,
        }))
    }

    const findPersonality = (ans) => {
        // counts order is E, N, T, P, I, S, F, J
        let arr = Object.values(ans)
        let counts = [0,0,0,0,0,0,0,0]
        for (let i = 0; i < arr.length - 4; i++) {
            counts[i % 8] += parseInt(arr[i])
        }
        let personality = counts[0] > counts[4] ? "E" : "I";
        personality += counts[1] > counts[5] ? "N" : "S";
        personality += counts[2] > counts[6] ? "T" : "F";
        personality += counts[3] > counts[7] ? "P" : "J";
        return personality;
    }

    return (
        <div>
            <Navigation />
            <div className='d-flex justify-content-center vh-100'>
                <div className='align-self-center pb-5'>
                <Card style={{ width: '20rem' }}>
                    <Card.Body>
                        <Card.Title>#{id}) {questionBank[id - 1]}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Select one of the following:</Card.Subtitle>
                        <Form onChange={updateAnswers}>
                            <Form.Group>
                                <Form.Check 
                                    type={'radio'}
                                    name={id}
                                    id={`${id}A`}
                                    label='Agree'
                                    value={1}
                                    checked={answers[id] == 1 && 'checked'}
                                />
                                <Form.Check 
                                    type={'radio'}
                                    name={id}
                                    id={`${id}B`}
                                    label='Neither Agree nor Disagree'
                                    value={0}
                                    checked={answers[id] == 0 && 'checked'}
                                />
                                <Form.Check 
                                    type={'radio'}
                                    name={id}
                                    id={`${id}C`}
                                    label='Disagree'
                                    value={-1}
                                    checked={answers[id] == -1 && 'checked'}
                                />
                            </Form.Group>
                        </Form>
                        <div className='d-flex justify-content-between'>
                            {id > 1 ?
                                <Link to={`${parseInt(id) - 1}`} className='text-danger'>Previous</Link> :
                                <Link to='/choice'><Button variant="outline-danger" size='sm'>Back</Button></Link>
                            }
                            {id < questionBank.length ? 
                                <Link to={`${parseInt(id) + 1}`} style={{color: '#ff5353'}}>Next</Link> : 
                                <Link to={Object.keys(answers).length >= questionBank.length ? `/results/${findPersonality(answers)}` : questionBank.length}>
                                    <Button variant="danger" style={{backgroundColor: '#ff5353'}} size='sm' onClick={() => {if (Object.keys(answers).length < questionBank.length) {alert("Please answer all of the questions to reveal your wine.")}}}>
                                        Submit
                                    </Button>
                                </Link>
                            }
                        </div>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    )
}

export default Quiz
