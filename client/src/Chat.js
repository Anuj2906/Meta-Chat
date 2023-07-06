import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import User from './User';
import Inmsg from './Inmsg';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container fluid className="h-screen d-flex flex-column">
      <Row className="bg-black p-1">
        <Col>
          <Button variant="secondary" className="sidebar-toggle" onClick={handleSidebarToggle}>
            Groups
          </Button>
        </Col>
        <Col className="bg-dark-gray text-3xl title-bar text-center">
          <b>Meta-Chat</b>
        </Col>
        <Col className="text-right">
          <Button variant="danger" className="rounded-md" style={{ fontSize: '1rem', padding: '0.25rem 0.25rem', lineHeight: '1', marginTop: '5px', alignItems: 'center' }}>
            Logout
          </Button>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        {isSidebarOpen && (
          <Col xs={12} md={3} className="bg-black">
            <div className="flex gap-2">
              <Form.Control
                type="text"
                placeholder="Search for People"
                className="bg-black text-light flex-grow border-rounded-sm p-2 mx-2 my-1"
              />
            </div>
            <User />
          </Col>
        )}
        <Col xs={12} md={isSidebarOpen ? 9 : 12} className="bg-gray p-2 d-flex flex-column">
          <div className="flex-grow-1 text-center">
            Message here
            <div className="text-left">
                <Inmsg/>
            </div>
            
          </div>

          
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
