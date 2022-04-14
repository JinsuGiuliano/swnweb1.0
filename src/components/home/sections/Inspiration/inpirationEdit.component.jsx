import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';

import { updateInspiration } from '../../../../redux/home/home.actions';

import FormInput from '../../../utils/form-input/form-input.component';
import CustomButton from '../../../utils/custom-button/custom-button.component';


const Column = styled.div`
position: absolute;
background-color: white;
min-width: 20%;
z-index:999999999999;
box-shadow: 5px 5px 40px #000;
`


const InspirationEdit = ({data}) => {

    const dispatch = useDispatch();
    
    const handleChange = event=> {
      const { value , name} = event.target;
      data[name] = value 
      dispatch(updateInspiration(data))
    }

    const handleSubmit = async event => {
      event.preventDefault();
  
    }
    return(

      <Column className='will-fadeIn'>
      <form onSubmit={handleSubmit}  style={{display:'flex',flexDirection:'row',alignItems:'stretch', justifyContent:'space-around'}}> 

                <h2>Inspiration</h2>
                <div>
                <h3>Title</h3>
                  <FormInput
                    name='title'
                    type='text'
                    handleChange={handleChange}
                    value={data.title}
                    label='title'
                    required
                  />
                  </div>
                  <div>
                  <h3>Text</h3>
                  <FormInput
                    name='text'
                    type='textarea'
                    value={data.text}
                    handleChange={handleChange}
                    label='text'
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

export default InspirationEdit;