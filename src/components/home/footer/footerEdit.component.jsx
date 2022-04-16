import React, {useState} from 'react'
import  styled  from 'styled-components'
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

const FooterEdit = ({data}) => {

  const [ footerData, setfooterData ] = useState(data)
  const dispatch = useDispatch();
  const homeState = useSelector(selectHomeHome);

  const handleChange = event => {
    const { value , name } = event.target;
    setfooterData({
      ...footerData, 
      [name] : value  
    })
     
  }

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('footer: ', footerData)
    dispatch(updateHomeStart({
      ...homeState, 
      footer: footerData
    }))
  }
    return(

      <Column className='will-fadeIn' >
      <form onSubmit={handleSubmit}  style={{display:'flex',flexDirection:'row',alignItems:'stretch', justifyContent:'space-around'}}> 
              <h2>Footer</h2>
                <div>
                  <FormInput
                    name='aboutUs'
                    type='text'
                   handleChange={handleChange}
                    value={footerData.aboutUs}
                    label='about'
                    required
                  />
                  </div>
                  <div>
                  <FormInput
                    name='facebook'
                    type='text'
                    value={footerData.facebook}
                    handleChange={handleChange}
                    label='facebook'
                    required
                  />
                  </div>
                  <div>
                  <FormInput
                    name='instagram'
                    type='text'
                    value={footerData.instagram}
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