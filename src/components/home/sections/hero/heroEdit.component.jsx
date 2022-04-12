import React,{useState} from 'react'
import styled from 'styled-components'

import FormInput from '../../../utils/form-input/form-input.component';
import CustomButton from '../../../utils/custom-button/custom-button.component';
import { ButtonsBarContainer } from '../../../signInUp/sign-in/sign-in.styles';
import Hero from './hero.component';
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

const HeroEdit = () => {


  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [imageUrl, setImageUrl ]= useState('');

  const handleSubmit = async event => {
    event.preventDefault();

  };

  const handleChange = event => {
    const { value, name } = event.target;

  };
    return(

      <Column >
                <div>
                <h2>Hero</h2>
                <form onSubmit={handleSubmit}> 
                <h3>Title</h3>
                  <FormInput
                    name='title'
                    type='text'
                    handleChange={handleChange}
                    value={title}
                    label='title'
                    required
                  />
                  <h3>SubTitle</h3>
                  <FormInput
                    name='subtotal'
                    type='text'
                    value={subTitle}
                    handleChange={handleChange}
                    label='subTitle'
                    required
                  />
                  <h3>Image Url</h3>
                  <FormInput
                    name='imageUrl'
                    type='text'
                    handleChange={handleChange}
                    value={imageUrl}
                    label='imageUrl'
                    required
                  />
                  <ButtonsBarContainer>
                    <CustomButton type='submit'> SAVE ALL </CustomButton>
                  </ButtonsBarContainer>
               </form>
                  
                </div>
                
                <Preview >
                  <h3>Preview</h3>
                  <Hero/>
                </Preview>
                
        </Column>
      
    )
}

export default HeroEdit;