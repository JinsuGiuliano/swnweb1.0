import React from 'react';
import { useSelector } from 'react-redux';
import { selectHomeValues } from '../../../../redux/home/home.selectors';

import ValueItem from './values.component';
import MisionVisionEdit from './misionVisionEdit.component';
import { Columns } from '../contact/contact.styles';
import { DirectoryMenuContainer, MainDirectoryMenuContainer } from '../../directory/directory.styles';

const MisionVision = ({onEdit}) => {
  const ourValues = useSelector(selectHomeValues)

console.log('ourValues: ', ourValues)
  return(
    <Columns>
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
    {
      onEdit? <MisionVisionEdit values={ourValues}/>:null
    }
    
    </Columns>
)}


export default MisionVision;