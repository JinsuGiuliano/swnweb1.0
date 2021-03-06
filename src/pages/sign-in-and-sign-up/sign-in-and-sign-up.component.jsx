import React from 'react';

import SignIn from '../../components/signInUp/sign-in/sign-in.component';
import SignUp from '../../components/signInUp/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
