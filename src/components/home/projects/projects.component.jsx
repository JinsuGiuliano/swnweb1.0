import React from 'react';
import { useSelector } from 'react-redux';

import { selectProjectSections } from '../../../redux/project/project.selectors';

import MenuItem from './menu-item/menu-item.component'
import { ProjectMenuContainer, MainProjectMenuContainer } from './projects.styles';

const Project = () => {

  const projects = useSelector(selectProjectSections);
  console.log('projects: ', projects)
  return(
    <MainProjectMenuContainer>
    <h2 className="text-center">Projecten Gallery</h2>
        <ProjectMenuContainer>
        {
          projects.map(({gallery, id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} id={id} gallery={gallery}/>
          ))
        }
      </ProjectMenuContainer>
    </MainProjectMenuContainer>

)}

export default Project;
