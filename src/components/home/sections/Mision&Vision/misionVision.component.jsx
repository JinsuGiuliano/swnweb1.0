import React from 'react';
import { useSelector } from 'react-redux';
import { selectHomeValues } from '../../../../redux/home/home.selectors';

import ValueItem from './values.component';

import { DirectoryMenuContainer, MainDirectoryMenuContainer } from '../../directory/directory.styles';

const MisionVision = () => {
  const ourValues = useSelector(selectHomeValues)

console.log('ourValues: ', ourValues)
  return(
    <MainDirectoryMenuContainer>
    <h2 className="text-center">Over Ons</h2>
        <DirectoryMenuContainer>
        {   ourValues &&
            ourValues.map((el, idx) => (
            <ValueItem key={idx} {...el} />
          ))
        }
      </DirectoryMenuContainer>
    </MainDirectoryMenuContainer>

)}


export default MisionVision;