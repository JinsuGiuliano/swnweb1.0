import React, {useState} from 'react'
import styled from 'styled-components'
import CustomButton from '../../utils/custom-button/custom-button.component';

import MenuItemEdit from './menu-item/menu-item-edit.component';
import NewProject from './menu-item/newProject.component';

const Column = styled.div`
  position: absolute;
  background-color: white;
  min-width: 20%;
  z-index:999999999999;
  box-shadow: 5px 5px 40px #000;
`

const ProjectsOnEdit = ({projects}) => {
    const [create, setCreate] = useState(false)
  console.log('projects',projects)
    return(
      <Column className='will-fadeIn'>
        <div  style={{
                display:'inline-flex',
                flexDirection:'row',
                alignItems:'stretch', 
                justifyContent:'space-around'
              }}> 
                <h2>Projects</h2>
               { 

                projects && !create &&
                projects.map((el, idx)=>( 
                  <MenuItemEdit key={idx} data={el}/>
                 )) 
               }
               {
                create? <NewProject/> : null
               }
               <CustomButton onClick={ () => setCreate(!create) }>  {!create? 'CREATE NEW': 'BACK'} </CustomButton> 
        </div>
      </Column>

    )
}

export default ProjectsOnEdit;