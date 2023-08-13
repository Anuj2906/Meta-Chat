import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import "./userChats.css";
import { ChatState } from '../../context/chatContext';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../chat.css';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { CloseButton } from 'react-bootstrap';
import ScrollableChat from './ScrollableChat';

const ChatArea = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState();
  const [newMessage, setNewMessage] = useState();

  const { selectedChat, user, setSelectedChat } = ChatState();

  const [error1show, setError1show] = useState(false);
  const errortoast1Close = () => setError1show(false);

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `http://localhost:4040/api/msg/${selectedChat._id}`,
        config
      );
      setMessages(data);
      setLoading(false);
    }catch(error){
      setError1show(true);
    }
  };

  const sendMsg = async () => {
      if (newMessage) {
        try {
          const config = {
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${user.token}`,
            },
          };
          setNewMessage("");
          const { data } = await axios.post("http://localhost:4040/api/msg/send", {
            content: newMessage,
            chatId: selectedChat._id,
          }, config);


          setMessages([...messages, data]);
        } catch (error) {
          setError1show(true);
        }
      }
    };
    const typingHandler = (e) => {
      setNewMessage(e.target.value);
    };

    useEffect(() => {
      fetchMessages();
    }, [selectedChat]);

    return (
      <div>
        <Modal show={error1show} onHide={errortoast1Close} className="modal-dialog modal-danger">
          <Container fluid className='m-2 d-flex justify-content-between align-items-center' >
            <span>Something went wrong!</span>
            <CloseButton onClick={errortoast1Close} />
          </Container>
        </Modal>
        {selectedChat ? (<>
          {loading ? (<div className=' d-flex justify-content-center align-items-center' style={{ height: "75vh" }}><Spinner animation="grow" className='mt-1' size='xl' /></div>) :
            <div className='message mb-4'>
              <ScrollableChat messages={messages}/>
            </div>}
          <div class="container searchbar searchbar1">
            <div class="row">
              <div class="col-12">
                <form>
                  <div class="input-group mb-1">
                    <input
                      type="text"
                      class="form-control rounded-2"
                      placeholder="Type your message..."
                      aria-label="Type your message..."
                      onChange={typingHandler}
                      value={newMessage}
                      required />
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary ms-2"
                        type="button"
                        onClick={sendMsg}
                      >
                        <i class="bi bi-alexa"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>) : (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "75vh" }}>
            Add a animation here
          </div>
        )}
      </div>
    )
  }

  export default ChatArea;