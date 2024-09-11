import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { setUserLogin } from '../Redux/AuthReducer/action'; // Import action to update login state

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate
  const dispatch = useDispatch(); // Hook to dispatch actions

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      // Handle login
      const storedData = JSON.parse(localStorage.getItem('personalData')) || {};
      if (storedData.email === email && storedData.password === password) {
        setMessage('Login Successful');
        localStorage.setItem('userName', `${storedData.firstName} ${storedData.lastName}`);
        dispatch(setUserLogin(true)); // Update global state to reflect login
        navigate('/'); // Redirect to Home page
      } else {
        setMessage('Incorrect email or password');
      }
    } else {
      // Handle signup
      if (firstName === '' || lastName === '' || email === '' || password === '') {
        setMessage('Please fill in all fields');
      } else {
        const userData = { firstName, lastName, email, password };
        localStorage.setItem('personalData', JSON.stringify(userData));
        setMessage('Account created successfully! Please log in.');
        setIsLogin(true);
      }
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>{isLogin ? 'LOGIN' : 'CREATE ACCOUNT'}</Title>
        {!isLogin && (
          <>
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </>
        )}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton type="submit">{isLogin ? 'LOGIN' : 'CREATE'}</SubmitButton>
        <Toggle>
          {isLogin ? (
            <span>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Create account</a></span>
          ) : (
            <span>Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a></span>
          )}
        </Toggle>
        {message && <Message>{message}</Message>}
      </LoginForm>
    </Container>
  );
};

// Styled-components for styling
const Container = styled.div`
  width: 100%;
  background-image: url('https://wallpapercave.com/wp/wp13713411.jpg');
  
  height: 710px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  width: 400px;
  height: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  background-color: white;
  padding: 30px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const Input = styled.input`
  background-color: white;
  border: 1px solid #fc2779;
  width: 300px;
  padding: 10px 20px;
  margin: 10px;
  height: 50px;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #e80071;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  margin: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #861c4d;
    transition: 0.3s;
  }

  &:active {
    background-color: white;
    color: #e80071;
  }
`;

const Toggle = styled.div`
  font-size: 14px;

  a {
    color: #e80071;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Message = styled.p`
  font-size: 14px;
  color: red;
`;

export default Login;
