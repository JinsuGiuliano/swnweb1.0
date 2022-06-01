import React from 'react';
import { useSelector } from 'react-redux';

import { selectProjectSections } from '../../../redux/project/project.selectors';

import MenuItem from './menu-item/menu-item.component'
import ProjectsOnEdit from './projectsEdit.component';

import { ProjectMenuContainer, MainProjectMenuContainer } from './projects.styles';

const Project = ({onEdit}) => {
  const projects = useSelector(selectProjectSections);
  console.log('projects: ',projects)
  return(
    <MainProjectMenuContainer>
    {
      onEdit? <ProjectsOnEdit projects={projects}/> : null
    }
    <h2 className="text-center">Projecten Gallery</h2>
        <ProjectMenuContainer >
        
        {
          projects &&
          projects.map(({gallery, id, ...otherSectionProps }, idx) => (
            <MenuItem key={idx} {...otherSectionProps} id={id} gallery={gallery}/>
          ))
        }
        {
          !projects &&  <div style={{height:'400px'}}><h3 > No projects yet...</h3></div>
        }
      </ProjectMenuContainer>
    </MainProjectMenuContainer>
    

)}

export default Project;
