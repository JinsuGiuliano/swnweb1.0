import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';

import { updateHomeStart } from '../../../redux/home/home.actions';
import { selectHomeHome } from '../../../redux/home/home.selectors';
import FormInput from '../../utils/form-input/form-input.component';
import CustomButton from '../../utils/custom-button/custom-button.component';

const Column = styled.div`
position: absolute;
background-color: white;
min-width: 20%;
z-index:999999999999;
box-shadow: 5px 5px 40px #000;
`

const MisionVisionEdit = ({values}) => {

  const dispatch = useDispatch();
  const homeState = useSelector(selectHomeHome);
  const handleChange = (event )=> {
    // const { value , name} = event.target;
    // data[name] = value 
    // homeState['footer'] = data 
  }

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(updateHomeStart(homeState))
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
                      <FormInput
                        name='text'
                        title={el.title}
                        type='textarea'
                        handleChange={handleChange}                        
                        value={el.text}
                        label='text'
                        required
                      />
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