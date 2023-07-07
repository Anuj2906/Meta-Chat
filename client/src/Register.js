import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // async function register(){
  //   //e.preventDefault();
  //   const { username, password } = formData;
  //   await axios.post('/register', {username , password});
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    const newErrors = {};
    
    if(!username){
        newErrors.username = 'This field is required';
    }

    if (!email) {
      newErrors.email = 'This field is required.';
      
    }
    if(!password){
        newErrors.password = 'This field is required';
    }

    setErrors(newErrors);

    if (email && password && username) {
      // Submit the form or perform further actions
      // register(email ,password);
      console.log("form submitted")
    }
  };

  return (
    <>
    <div className="my-20">
    <h1 className="align-items-center text-center mb-4">Meta-Chat</h1>
    <br/>
    <br/>
    <br/>
    <div className="d-flex justify-content-center align-items-center" style={{ height: '35vh' }}>
      
      <Form onSubmit={handleSubmit} className="">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="d-grid gap-2 col-6 mx-auto mb-3">
          <Button variant="outline-primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
    
    </div>
    <div className="text-center">Already have an account ? &nbsp;
    <a href='/login'>Login</a>
    </div>
    </>
  );
}

export default Register;

