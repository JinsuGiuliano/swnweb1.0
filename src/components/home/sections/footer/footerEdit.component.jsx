import React,{useState} from 'react'
import  styled  from 'styled-components'
import FormInput from '../../../utils/form-input/form-input.component';
import CustomButton from '../../../utils/custom-button/custom-button.component';
import { ButtonsBarContainer } from '../../../signInUp/sign-in/sign-in.styles';
import Footer from './footer.component';
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

const FooterEdit = () => {


  const [about, setAbout] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

  };

  const handleChange = event => {
    const { value, name } = event.target;

  };
    return(

      <Column >
                <div>

                <h2>Footer</h2>
                <form onSubmit={handleSubmit}> 
                <h3>About</h3>
                  <FormInput
                    name='about'
                    type='text'
                    handleChange={handleChange}
                    value={about}
                    label='about'
                    required
                  />
                  <h3>Share Links</h3>
                  <h4>FaceBook</h4>
                  <FormInput
                    name='facebook'
                    type='text'
                    value={facebook}
                    handleChange={handleChange}
                    label='facebook'
                    required
                  />
                  <h4>Instagram</h4>
                  <FormInput
                    name='instagram'
                    type='text'
                    value={instagram}
                    handleChange={handleChange}
                    label='instagram'
                    required
                  />
                  <ButtonsBarContainer>
                    <CustomButton type='submit'> SAVE ALL </CustomButton>
                  </ButtonsBarContainer>
               </form>
                  
                </div>
                <Preview>
                  <h3>Preview</h3>
                  <Footer/>
                </Preview>
        </Column>
      
    )
}

export default FooterEdit;