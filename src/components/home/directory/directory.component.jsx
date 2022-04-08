import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer, MainDirectoryMenuContainer } from './directory.styles';

const Directory = () => {

  const projects = useSelector(selectDirectorySections);
  console.log('projects: ', projects)
  return(
    <MainDirectoryMenuContainer>
    <h2 className="text-center">Projecten Gallery</h2>
        <DirectoryMenuContainer>
        {
          projects.map(({gallery, id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} id={id} gallery={gallery}/>
          ))
        }
      </DirectoryMenuContainer>
    </MainDirectoryMenuContainer>

)}

export default Directory;
