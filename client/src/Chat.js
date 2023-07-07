import './chat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Group from './Group';
import Inmsg from './Inmsg';
import Outmsg from './outmsg';
import NewGroup from './Newgroup';
import JoinGroup from './Joingroup';

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
          <Button variant="outline-secondary" className="sidebar-toggle my-1" onClick={handleSidebarToggle}>
            Groups
          </Button>
        </Col>
        <Col className="bg-gray text-3xl title-bar text-center text-muted">
          <b>Meta-Chat</b>
        </Col>
        <Col className="text-right">
          
          <Button variant="outline-danger" className="my-1">
            Logout
          </Button>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        {isSidebarOpen && (
          <Col xs={12} md={3} className="bg-black">
            
            <Group/>
            <div className="text-center">
              <NewGroup/>
              <JoinGroup/>
            </div>
            
          </Col>
        )}
        <Col xs={12} md={isSidebarOpen ? 9 : 12} className="bg-gray p-2 d-flex flex-column">
          <div className="flex-grow-1 text-center text-muted">
            <div>
               Group Name
            </div>
            
            
              <div className="text-left">
                <div className="message-container">
                  <Inmsg />
                </div>
              </div>
              
              
              <div className="text-right">
                <div className="message-container msg-color">
                  <Outmsg />
                </div>
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
            <Button variant="outline-success" className="rounded-md p-2">
              Send
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
