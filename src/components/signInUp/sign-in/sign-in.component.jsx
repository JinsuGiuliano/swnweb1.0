import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import FormInput from '../../utils/form-input/form-input.component';
import CustomButton from '../../utils/custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart
} from '../../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import { Navigate, useNavigate } from 'react-router-dom';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { CodeSlash } from 'react-bootstrap-icons';

const SignIn = () =>  {
 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(selectCurrentUser)
  const state = {
    email:'',
    password:''
  }
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
   
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = event => {
    const { value, name } = event.target;
    switch(name){
      case 'email': setEmail(value);console.log('email:', value);break;
      case 'password': setPassword(value);console.log('password:', value);;break;
      default: break
    }
  };

  // if(currentUser){
  //   console.log('currentUser: ', currentUser)
  //   navigate('/');
  // }

    return (
      <SignInContainer>
        <SignInTitle>Sign in with your email and password</SignInTitle>
          <FormInput
            name='email'
            type='email'
            handleChange={(event) => handleChange(event)}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={(event) => handleChange(event)}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton onClick={(event) => handleSubmit(event)}> Sign in </CustomButton>
          </ButtonsBarContainer>
      </SignInContainer>
    );
  }



export default SignIn;
