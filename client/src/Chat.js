import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import User from './User';

export default function Chat() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Container fluid className="h-screen d-flex flex-column">
      <Row className="bg-black p-1">
        <Col className="bg-dark-gray text-3xl title-bar">
          <b>Meta-Chat</b>
        </Col>
        <Col className="text-right">
          <Button variant="danger" className="rounded-md" style={{ fontSize: '1rem', padding: '0.25rem 0.25rem', lineHeight: '1', marginTop: '5px', alignItems: 'center' }}>
            Logout
          </Button>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col xs={12} md={3} className="bg-black">
          <div className="p-1">
            <Form.Control
              type="text"
              placeholder="Search for People"
              className="bg-dark text-dark flex-grow border-rounded-sm p-1 mt-1 mb-2"
            />
            <User />
          </div>
        </Col>
        <Col xs={12} md={9} className="bg-gray p-2 d-flex flex-column">
          <div className="flex-grow-1 text-center">Message here</div>
          <div className="flex gap-2">
            <Form.Control
              as="textarea"
              rows={1}
              placeholder="Type your Message"
              className="bg-dark-gray text-light flex-grow border rounded-md p-2 textarea-no-scrollbar resize-none"
              value={message}
              onChange={handleMessageChange}
            />
            <Button variant="primary" className="rounded-md p-2">
              Send
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
