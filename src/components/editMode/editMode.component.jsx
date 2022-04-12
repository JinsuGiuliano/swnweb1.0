import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { changeEditMode } from '../../redux/home/home.actions'

import ContactEdit from '../home/sections/contact/contactEdit.component'
import FooterEdit from '../home/sections/footer/footerEdit.component'
import HeroEdit from '../home/sections/hero/heroEdit.component'
import InspirationEdit from '../home/sections/Inspiration/inpirationEdit.component'
import MisionVisionEdit from '../home/sections/Mision&Vision/misionVisionEdit.component'

const Ln = styled.hr`
height:2px;
border-width:0;
color:gray;
background-color:gray;
margin: 100px 50px;
`

const ColumnMain = styled.div`
min-width: 30%;
padding: 50px 50px;  
`
const EditMode = () => {

    const dispatch = useDispatch();

    return(
        <ColumnMain>
            <button onClick={()=>dispatch(changeEditMode(false))}>Back to Home page</button>
            <HeroEdit/>
            <Ln/>
            <InspirationEdit/>
            <Ln/>
            <MisionVisionEdit/>
            <Ln/>
            <ContactEdit/>
            <Ln/>
            <FooterEdit/>
        </ColumnMain>
    )
}

export default EditMode;