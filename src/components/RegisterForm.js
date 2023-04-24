import React from 'react'
import '../assets/authstyles.css'
import { Button, Container, Form } from 'react-bootstrap'
import {auth} from './FirebaseConfig';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export default function RegisterForm() {
  var urlParams = new URLSearchParams(window.location.search);
  var coupon= urlParams.get('coupon');
  console.log(coupon)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const goToLogin = async (event) => {
    event.preventDefault();
    navigate('/login');
  }
  const handleSignUp = async (event) => {
    event.preventDefault();
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    try {
      // create a new user account
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      console.log('New user registered:', userCredential.user);
      navigate('/generator');
    } catch (error) {
      console.log(error.code, error.message);
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }
  return (
 <div className='my-5 text-white'>
  <Container className='registerstyle'>
<Form>
  <h2 className='text-center'>Register Form</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <input className='form-control' type="email" id="email" name="email" required value={email} onChange={handleEmailChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <input className='form-control' type="password" id="password" name="password" required value={password} onChange={handlePasswordChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <input className='form-control' type="password" id="confirm-password" name="confirm-password" required value={confirmPassword} onChange={handleConfirmPasswordChange} />

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      </Form.Group>
     <center>
      <Button variant="primary" onClick={handleSignUp}>
        Register
      </Button>
      <Button variant="primary" onClick={goToLogin} className='mx-4'>
        Already Registered ?! Login
      </Button>
      </center>
</Form>
</Container>
    </div>
  )
}
