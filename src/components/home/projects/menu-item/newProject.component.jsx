import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { createProjectStart } from '../../../../redux/project/project.actions';
import { selectProjectLength } from '../../../../redux/project/project.selectors';

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
  const index = useSelector(selectProjectLength) + 1

  const handleChange = event => {
    const { value , name } = event.target;
    setprojectData({
      ...projectData, 
      [name] : value  
    })
  }

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('New Project: ', projectData)
    dispatch(createProjectStart({...projectData, id: index }))
  }
    return(
      <div>
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