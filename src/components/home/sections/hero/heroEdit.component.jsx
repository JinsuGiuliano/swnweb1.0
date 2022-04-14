import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'

import { updateHero } from '../../../../redux/home/home.actions';
import CustomButton from '../../../utils/custom-button/custom-button.component';
import FormInput from '../../../utils/form-input/form-input.component';
const Column = styled.div`
position: absolute;
background-color: white;
min-width: 20%;
z-index:999999999999;
box-shadow: 5px 5px 40px #000;
`;


const HeroEdit = ({data}) => {
  const dispatch = useDispatch();
    
  const handleChange = (event )=> {
    const { value , name} = event.target;
    data[name] = value 
    dispatch(updateHero(data))
  }
  const handleSubmit = async event => {
    event.preventDefault();

  }
    return(

      <Column className='will-fadeIn'>
      <form onSubmit={handleSubmit}  
            style={{display:'flex',flexDirection:'row',alignItems:'stretch', justifyContent:'space-around'}}> 

                <h2>Hero</h2>
              <div>
                <h3>Title</h3>
                  <FormInput
                    name='title'
                    type='textarea'
                    handleChange={handleChange}
                    value={data.title}
                    label='title'
                    required
                  />
                </div>
                <div>
                  <h3>SubTitle</h3>
                  <FormInput
                    name='subtotal'
                    type='text'
                    value={data.subTitle}
                    handleChange={handleChange}
                    label='subTitle'
                    required
                  />
                  </div>
                  <div>
                  <h3>Image Url</h3>
                  <FormInput
                    name='imageUrl'
                    type='text'
                    handleChange={handleChange}
                    value={data.imageUrl}
                    label='imageUrl'
                    required
                  />
                  </div>
                  <CustomButton type='submit'> SAVE </CustomButton>         

                  </form>
        </Column>
      
    )
}

export default HeroEdit;