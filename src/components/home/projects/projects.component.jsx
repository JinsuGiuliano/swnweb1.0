import React from 'react';
import { useSelector } from 'react-redux';

import { selectProjectSections } from '../../../redux/project/project.selectors';

import MenuItem from './menu-item/menu-item.component'
import ProjectsOnEdit from './projectsEdit.component';

import { ProjectMenuContainer, MainProjectMenuContainer } from './projects.styles';

const Project = ({onEdit}) => {
  const projects = useSelector(selectProjectSections);

  return(
    <MainProjectMenuContainer>
    {
      onEdit? <ProjectsOnEdit projects={projects}/> : null
    }
    <h2 className="text-center">Projecten Gallery</h2>
        <ProjectMenuContainer>
        {
          projects &&
          projects.map(({gallery, id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} id={id} gallery={gallery}/>
          ))
        }
      </ProjectMenuContainer>
    </MainProjectMenuContainer>
    

)}

export default Project;
