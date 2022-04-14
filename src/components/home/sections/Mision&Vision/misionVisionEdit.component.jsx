import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';

import { updateValues } from '../../../../redux/home/home.actions';

import FormInput from '../../../utils/form-input/form-input.component';
import CustomButton from '../../../utils/custom-button/custom-button.component';
const Column = styled.div`
position: absolute;
background-color: white;
min-width: 20%;
z-index:999999999999;
box-shadow: 5px 5px 40px #000;
`


const MisionVisionEdit = ({values}) => {
  console.log('values: ', values)
    const dispatch = useDispatch();

    const handleChange = event => {
      const { value , name, title} = event.target;
      console.log( event.target)
      values.map( e => e.title === title? e[`${name}`] = value : null )
      dispatch(updateValues(values))
    }
    const handleSubmit = async event => {
      event.preventDefault();
  
    }
    return(
      <Column className='will-fadeIn'>
      <form onSubmit={handleSubmit}  style={{display:'flex',flexDirection:'row',alignItems:'stretch', justifyContent:'space-around'}}> 

                <h2>Mission & Vision</h2>
               { 
                values && 
                values.map((el, idx)=>( 
                  <div key={idx}>
                      <h3>{el.title.toUpperCase()}</h3>
                      <h5>TEXT</h5>
                      <FormInput
                        name='text'
                        title={el.title}
                        type='textarea'
                        handleChange={handleChange}                        
                        value={el.text}
                        label='text'
                        required
                      />
                      <h5>IMAGE</h5>
                      <FormInput
                        name='image'
                        title={el.title}
                        type='text'
                        handleChange={handleChange}   
                        value={el.imageUrl}
                        label='image'
                        required
                      />
                  </div>
                 )) 
               }
               <CustomButton type='submit'> SAVE </CustomButton>         
                  </form>
        </Column>
      
    )
}

export default MisionVisionEdit;