import React from 'react'
import '../assets/authstyles.css'
import './FirebaseConfig.js'
import {useNavigate} from 'react-router-dom';
import { Button, Container, Form } from 'react-bootstrap'
import { auth, googleProvider } from "./FirebaseConfig.js";
import {
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from "react";

function LoginForm () {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log('Logged in as:', user);
        // Redirect to the dashboard or another protected page
        navigate('/generator');
      })
      .catch((error) => {
        // Login failed
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login error:', errorCode, errorMessage);
        // Display an error message to the user
      });
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/generator');
    } catch (err) {
      console.error(err);
    }
  };

  return (
 <div className='my-5 text-white'>
  <Container className='loginstyle'>
<Form>
  <h2 className='text-center'>Login Form</h2>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <input className='form-control' name='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input className='form-control' name='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
     <center>
      <Button onClick={handleLogin} variant="primary">
      Sign In 
      </Button>
      <Button onClick={signInWithGoogle} variant="primary" className='m-4'>
      signIn With Google
      </Button>
      </center>
</Form>


</Container>
    </div>
  )
}

export default LoginForm ;