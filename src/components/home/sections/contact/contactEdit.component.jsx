import React,{useState} from 'react'
import styled from 'styled-components'

import FormInput from '../../../utils/form-input/form-input.component';
import CustomButton from '../../../utils/custom-button/custom-button.component';
import { ButtonsBarContainer } from '../../../signInUp/sign-in/sign-in.styles';
import Contact from './contact.component';

const Column = styled.div`
min-width: 30%;
flex: 1 1 auto;
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 0px 50px;  
`
const Preview = styled.div`
padding: 0px 50px;  
`

const ContactEdit = () => {


  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAdress] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

  };

  const handleChange = event => {
    const { value, name } = event.target;

  };
    return(

      <Column >
                <div>

                <h2>Contact</h2>
                <form onSubmit={handleSubmit}> 
                <h3>Phone</h3>
                  <FormInput
                    name='phone'
                    type='text'
                    handleChange={handleChange}
                    value={phone}
                    label='phone'
                    required
                  />
                  <h3>E-mail</h3>
                  <FormInput
                    name='email'
                    type='text'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required
                  />
                  <h3>Address</h3>
                  <FormInput
                    name='address'
                    type='text'
                    value={address}
                    handleChange={handleChange}
                    label='address'
                    required
                  />
                <h3>Open hours</h3>
                <FormInput
                  name='hours'
                  type='text'
                  value={hours}
                  handleChange={handleChange}
                  label='hours'
                  required
                />
                  <ButtonsBarContainer>
                    <CustomButton type='submit'> SAVE ALL </CustomButton>
                  </ButtonsBarContainer>
               </form>
                  
                </div>
                <Preview>
                  <h3>Preview</h3>
                  <Contact/>
                </Preview>
        </Column>
      
    )
}

export default ContactEdit;