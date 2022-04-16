import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectStart, deleteProjectStart } from '../../../../redux/project/project.actions';
import { selectProjectSections } from '../../../../redux/project/project.selectors';

import CustomButton from '../../../utils/custom-button/custom-button.component';
import FormInput from '../../../utils/form-input/form-input.component';


const MenuItemEdit = ({data}) => {

  const [ projectData, setprojectData ] = useState({...data})
  const dispatch = useDispatch();
  const projects = useSelector(selectProjectSections);
  console.log('projectData: ', {...data})

  const handleChange = event => {
    const { value , name } = event.target;
    setprojectData({
      ...projectData, 
      [name] : value  
    })
  }

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(updateProjectStart(projectData, projects))
  }
    return(
        <form onSubmit={handleSubmit} style={{
            padding:'0 5px',
            display:'flex',
            flexDirection:'column',
            borderRight: '1px #000 solid'
          }} >

            <h3>{projectData.title.toUpperCase()}</h3>
              
              <div  style={{
                display:'flex',
                flexDirection:'row',
              }} >
              <div style={{padding:'0 5px'}} >
              <FormInput
                name='title'
                type='text'
                handleChange={handleChange}                        
                value={projectData.title}
                label='title'
                required
              />
              <FormInput
                name='subtitle'
                type='text'
                handleChange={handleChange}                        
                value={projectData.subtitle}
                label='subtitle'
                required
              />
              <FormInput
                name='text'
                type='textarea'
                handleChange={handleChange}                        
                value={projectData.text}
                label='text'
                required
              />
            </div>
            <div style={{padding:'0 5px'}}>
              <FormInput
                name='imageUrl'
                type='text'
                handleChange={handleChange}   
                value={projectData.imageUrl}
                label='Main image(url)'
                required
              />
              <FormInput
                name='gallery'
                type='text'
                handleChange={handleChange}   
                value={projectData.gallery}
                label='Image Gallery(URLs separated by `,`)'
                style={{minWidth:'50%'}}
                required
              />
              <FormInput
                name='size'
                type='text'
                handleChange={handleChange}   
                value={projectData.size}
                style={{minWidth:'50%'}}
                label='Main Image Size(large or small)'
              />
            </div> 
            </div>  
            <div style={{
              display:'flex',
              flexDirection:'column',
            }} >
              <CustomButton type='submit' > SAVE </CustomButton> 
              <CustomButton onClick={()=>dispatch(deleteProjectStart(projectData, projects))} inverted={true}> DELETE </CustomButton> 
            </div>  
                 
        </form>
    )
}

export default MenuItemEdit;