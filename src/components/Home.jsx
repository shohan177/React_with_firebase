
import React from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap'
import { app } from '../firebase';



const Home = () => {

    const auth = getAuth(app);

    const handelFormSubmit = (e) => {
        e.preventDefault()
        let fromData = new FormData(e.target)
        let data = Object.fromEntries(fromData.entries())
        console.log(data.name)

        createUserWithEmailAndPassword(auth, data.email, data.pass).then(useData => {
            console.log(useData.user.email)
        })
    }



    return (
        <Container className='my-5'>
            <Row className=" justify-content-center">
                <Col md={5}>
                    <Card className='shadow'>
                        <Card.Body>
                            <Form onSubmit={handelFormSubmit}>
                                <Form.Group className='my-3'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name="email"></Form.Control>
                                </Form.Group>
                                <Form.Group className='my-3'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="pass"></Form.Control>
                                </Form.Group>
                                <Form.Group className='my-3'>
                                    <Button variant="primary" type="submit">Add User</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
