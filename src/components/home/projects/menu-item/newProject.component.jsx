import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { updateProjectStart } from '../../../../redux/project/project.actions';
import { selectProjectSections } from '../../../../redux/project/project.selectors';

import CustomButton from '../../../utils/custom-button/custom-button.component';
import FormInput from '../../../utils/form-input/form-input.component';


const NewProject = () => {

  const projectNew = {
     gallery: '',
     imageUrl: '',
     size: '',
     subtitle: '',
     text: '',
     title: ''
  }
  const [ projectData, setprojectData ] = useState(projectNew)
  const dispatch = useDispatch();
  const projects = useSelector(selectProjectSections);

  const handleChange = event => {
    const { value , name } = event.target;
    setprojectData({
      ...projectData, 
      [name] : value  
    })
  }

  const handleSubmit = async event => {
    event.preventDefault();

    projects.push({...projectData, gallery: projectData.gallery.split(','), size:'large'})
    dispatch(updateProjectStart(projects))

  }
    return(
      <div  style={{
        heigh:'500px'
      }} >
      <h3> CREATE A NEW PROJECT </h3>
      <form onSubmit={handleSubmit} style={{
            padding:'0 5px',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between'
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
                  label='Images URLs % by `,`'
                  style={{minWidth:'50%'}}
                  required
                />
              </div>
              <div  style={{
                display:'flex',
                flexDirection:'row',
              }} >
                <CustomButton type='submit' > SAVE </CustomButton> 
                <CustomButton onClick={()=>setprojectData(projectNew)} inverted> RESET </CustomButton> 
              </div>
        </form>
        </div>
    )
}

export default NewProject;