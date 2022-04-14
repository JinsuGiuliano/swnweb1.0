import React from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux';

import { updateContact } from '../../../../redux/home/home.actions';

import FormInput from '../../../utils/form-input/form-input.component';
import CustomButton from '../../../utils/custom-button/custom-button.component';

const Column = styled.div`
position: absolute;
background-color: white;
min-width: 20%;
z-index:999999999999;
box-shadow: 5px 5px 40px #000;
`;

const ContactEdit = ({data}) => {

  const dispatch = useDispatch();
    
  const handleChange = (event )=> {
    const { value , name} = event.target;
    data[name] = value 
    dispatch(updateContact(data))
  }

  const handleSubmit = async event => {
    event.preventDefault();

  }
    return(

      <Column className='will-fadeIn'>
      <form onSubmit={handleSubmit}  style={{display:'flex',flexDirection:'row',alignItems:'stretch', justifyContent:'space-around'}}> 

                <h2>Contact</h2>
                <div>
                <h3>Phone</h3>
                  <FormInput
                    name='phone'
                    type='text'
                    handleChange={handleChange}
                    value={data.phone}
                    label='phone'
                    required
                  />
                  </div>
                  <div>
                  <h3>E-mail</h3>
                  <FormInput
                    name='email'
                    type='text'
                    value={data.email}
                    handleChange={handleChange}
                    label='email'
                    required
                  />
                  </div>
                  <div>
                  <h3>Address</h3>
                  <FormInput
                    name='address'
                    type='text'
                    value={data.address}
                   handleChange={handleChange}
                    label='address'
                    required
                  />
                  </div>
                  <div>
                <h3>Open hours</h3>
                <FormInput
                  name='hours'
                  type='text'
                  value={data.hours}
                 handleChange={handleChange}
                  label='hours'
                  required
                />
                </div>
                <CustomButton type='submit'> SAVE </CustomButton>    
                </form>
        </Column>
      
    )
}

export default ContactEdit;