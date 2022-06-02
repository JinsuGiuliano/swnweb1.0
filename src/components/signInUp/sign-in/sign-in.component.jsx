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
import { Navigate } from 'react-router-dom';

const SignIn = () =>  {
 
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  const state = {
    email: '',
    password: ''
  }
  const [signin, setSignin] = useState(state)

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = signin;

    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setSignin({ [name]: value });
  };

  if(currentUser){
    Navigate('/');
  }

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={() => handleSubmit()}>
          <FormInput
            name='email'
            type='email'
            handleChange={() => handleChange()}
            value={signin.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={signin.password}
            handleChange={() => handleChange()}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    );
  }



export default SignIn;
