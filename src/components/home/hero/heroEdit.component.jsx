import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'

import { updateHomeStart } from '../../../redux/home/home.actions';
import { selectHomeHome } from '../../../redux/home/home.selectors';

import CustomButton from '../../utils/custom-button/custom-button.component';
import FormInput from '../../utils/form-input/form-input.component';

const Column = styled.div`
position: absolute;
background-color: white;
min-width: 20%;
z-index:999999999999;
box-shadow: 5px 5px 40px #000;
`;


const HeroEdit = ({data}) => {

  const [ heroData, setheroData ] = useState(data)
  const dispatch = useDispatch();
  const homeState = useSelector(selectHomeHome);

  const handleChange = event => {
    const { value , name } = event.target;
    setheroData({
      ...heroData, 
      [name] : value  
    })
     
  }

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('hero: ', heroData)
    dispatch(updateHomeStart({
      ...homeState, 
      hero: heroData
    }))
  }
    return(

      <Column className='will-fadeIn'>
      <form onSubmit={handleSubmit}  
            style={{display:'flex',flexDirection:'row',alignItems:'stretch', justifyContent:'space-around'}}> 

                <h2>Hero</h2>
              <div>
                  <FormInput
                    name='title'
                    type='textarea'
                    handleChange={handleChange}
                    value={heroData.title}
                    label='title'
                    required
                  />
                </div>
                <div>
                  <FormInput
                    name='subTitle'
                    type='text'
                    value={heroData.subTitle}
                    handleChange={handleChange}
                    label='subTitle'
                    required
                  />
                  </div>
                  <div>
                  <FormInput
                    name='imageUrl'
                    type='text'
                    handleChange={handleChange}
                    value={heroData.imageUrl}
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