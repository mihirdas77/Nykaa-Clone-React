// src/components/CompleteSignIn.js
import React, { useEffect } from 'react';
import firebase from './firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../Redux/AuthReducer/action';

export const CompleteSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCompleteSignIn = async () => {
      const email = window.localStorage.getItem('emailForSignIn');
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        try {
          await firebase.auth().signInWithEmailLink(email, window.location.href);
          window.localStorage.removeItem('emailForSignIn');
          dispatch(setUserLogin(true));
          navigate('/dashboard'); // Redirect to a protected route
        } catch (error) {
          console.error('Error signing in with email link:', error);
          navigate('/error'); // Redirect to an error page
        }
      }
    };

    handleCompleteSignIn();
  }, [navigate, dispatch]);

  return <div>Processing sign-in...</div>;
};
