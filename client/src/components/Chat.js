// import './chat.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';

import { AuthContext } from '../context/AuthContext';
// import SideBar from './chatComponents/SideBar';
import ChatNav from './ChatNav';
import UserChats from './chatComponents/UserChats';
import ChatArea from './chatComponents/ChatArea';

export default function Chat() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <div style={{ width: "100%" }}>
        { user && <ChatNav/> }
        <Container>
          { user && <UserChats/> }
          { user && <ChatArea/>}
        </Container>
      </div>
      
      <h1>{user.username}</h1>
    </>
    
  );
}
 