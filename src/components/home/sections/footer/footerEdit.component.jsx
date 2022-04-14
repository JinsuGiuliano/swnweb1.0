import React from 'react'
import  styled  from 'styled-components'
import { useDispatch } from 'react-redux';

import { updateFooter } from '../../../../redux/home/home.actions';

import FormInput from '../../../utils/form-input/form-input.component';
import CustomButton from '../../../utils/custom-button/custom-button.component';

const Column = styled.div`
position: absolute;
background-color: white;
min-width: 20%;
z-index:999999999999;
box-shadow: 5px 5px 40px #000;
`

const FooterEdit = ({data}) => {

    const dispatch = useDispatch();
      
    const handleChange = (event )=> {
      const { value , name} = event.target;
      data[name] = value 
      dispatch(updateFooter(data))
    }

    const handleSubmit = async event => {
      event.preventDefault();
  
    }
    return(

      <Column className='will-fadeIn' >
      <form onSubmit={handleSubmit}  style={{display:'flex',flexDirection:'row',alignItems:'stretch', justifyContent:'space-around'}}> 
              <h2>Footer</h2>
                <div>
                <h3>About</h3>
                  <FormInput
                    name='about'
                    type='text'
                   handleChange={handleChange}
                    value={data.aboutUs}
                    label='about'
                    required
                  />
                  </div>
                  <div>
                  <h4>FaceBook</h4>
                  <FormInput
                    name='facebook'
                    type='text'
                    value={data.facebook}
                    handleChange={handleChange}
                    label='facebook'
                    required
                  />
                  </div>
                  <div>
                  <h4>Instagram</h4>
                  <FormInput
                    name='instagram'
                    type='text'
                    value={data.instagram}
                    handleChange={handleChange}
                    label='instagram'
                    required
                  />
                  </div>
                    <CustomButton type='submit'> SAVE </CustomButton>         
                  </form>
        </Column>
      
    )
}

export default FooterEdit;