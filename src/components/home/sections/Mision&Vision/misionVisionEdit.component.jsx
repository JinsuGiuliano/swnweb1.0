import React,{useState} from 'react'
import styled from 'styled-components'

import FormInput from '../../../utils/form-input/form-input.component';
import CustomButton from '../../../utils/custom-button/custom-button.component';
import { ButtonsBarContainer } from '../../../signInUp/sign-in/sign-in.styles';
import MisionVision from './misionVision.component';

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


const MisionVisionEdit = () => {


  const [values, setValues] = useState('');
  const [mission, setMission] = useState('');
  const [vision, setVision ]= useState('');

  const handleSubmit = async event => {
    event.preventDefault();

  };

  const handleChange = event => {
    const { value, name } = event.target;

  };
    return(

      <Column >
                <div>
                <h2>Mission & Vision</h2>
                <form onSubmit={handleSubmit}> 
                <h3>Vision</h3>
                  <FormInput
                    name='vision'
                    type='text'
                    handleChange={handleChange}
                    value={vision}
                    label='vision'
                    required
                  />
                  <h3>Mission</h3>
                  <FormInput
                    name='mission'
                    type='text'
                    value={mission}
                    handleChange={handleChange}
                    label='mission'
                    required
                  />
                  <h3>Values</h3>
                  <FormInput
                    name='values'
                    type='text'
                    handleChange={handleChange}
                    value={values}
                    label='values'
                    required
                  />
                  <ButtonsBarContainer>
                    <CustomButton type='submit'> SAVE ALL </CustomButton>
                  </ButtonsBarContainer>
               </form>
                </div>
                <Preview>
                  <MisionVision/>
              </Preview>
        </Column>
      
    )
}

export default MisionVisionEdit;