import React, {useState} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { selectHomeHome } from '../../../redux/home/home.selectors';
import { updateHomeStart } from '../../../redux/home/home.actions';

import FormInput from '../../utils/form-input/form-input.component';
import CustomButton from '../../utils/custom-button/custom-button.component';


const Column = styled.div`
position: absolute;
background-color: white;
min-width: 20%;
z-index:999999999999;
box-shadow: 5px 5px 40px #000;
`


const InspirationEdit = ({data}) => {

  const [ inspirationData, setinspirationData ] = useState(data)
  const dispatch = useDispatch();
  const homeState = useSelector(selectHomeHome);

  const handleChange = event => {
    const { value , name } = event.target;
    setinspirationData({
      ...inspirationData, 
      [name] : value  
    })
     
  }

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('inspiration: ', inspirationData)
    dispatch(updateHomeStart({
      ...homeState, 
      inspiration: inspirationData
    }))
  }
    return(

      <Column className='will-fadeIn'>
      <form onSubmit={handleSubmit}  style={{display:'flex',flexDirection:'row',alignItems:'stretch', justifyContent:'space-around'}}> 

                <h2>Inspiration</h2>
                <div>
                  <FormInput
                    name='title'
                    type='text'
                    handleChange={handleChange}
                    value={inspirationData.title}
                    label='title'
                    required
                  />
                  </div>
                  <div>
                  <FormInput
                    name='text'
                    type='textarea'
                    value={inspirationData.text}
                    handleChange={handleChange}
                    label='text'
                    required
                  />
                  </div>
                  <div>
                  <FormInput
                    name='imageUrl'
                    type='text'
                    handleChange={handleChange}
                    value={inspirationData.imageUrl}
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