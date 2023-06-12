import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Styles/contact.css';

const Contact = () => {

    const submitHandler = () => {
        console.log('submitted');
    }

    return(
        <>
        <div className="contact-container">
            <span className="contact-header">CONTACT</span>
        </div>

        <div className="contact-form-container">
            <Form className="contact-form">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enquiry</Form.Label>
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
            </Form>

            <Button className='contact-button' variant="success" onClick={submitHandler}>Submit</Button>{' '}
        </div>
        </>
    )
};

export default Contact;
