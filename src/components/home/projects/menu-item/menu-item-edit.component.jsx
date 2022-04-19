import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateProjectStart, deleteProjectStart } from '../../../../redux/project/project.actions';
import { selectProjectSections } from '../../../../redux/project/project.selectors';

import CustomButton from '../../../utils/custom-button/custom-button.component';
import FormInput from '../../../utils/form-input/form-input.component';
import { CarouselItem } from '../carrousel/carousel';

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
 
    projects.push({...projectData,size:'large'})
    dispatch(updateProjectStart(projects))
  
  }
    return(
      <CarouselItem>
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
                label='Image url'
                required
              />
              <FormInput
                name='gallery'
                type='text'
                handleChange={handleChange}   
                value={projectData.gallery.join(',')}
                label='Images urls % by `,`'
                style={{minWidth:'50%'}}
                required
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
        </CarouselItem>
    )
}

export default MenuItemEdit;