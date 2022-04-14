import React from 'react';
import { useSelector } from 'react-redux';
import { selectHomeValues } from '../../../redux/home/home.selectors';

import ValueItem from './values.component';
import MisionVisionEdit from './misionVisionEdit.component';
import { Columns } from '../contact/contact.styles';
import { ProjectMenuContainer, MainProjectMenuContainer } from '../projects/projects.styles';

const MisionVision = ({onEdit}) => {
  const ourValues = useSelector(selectHomeValues)

console.log('ourValues: ', ourValues)
  return(
    <Columns>
    <MainProjectMenuContainer>
    <h2 className="text-center">Over Ons</h2>
        <ProjectMenuContainer>
        {   ourValues &&
            ourValues.map((el, idx) => (
            <ValueItem key={idx} {...el} />
          ))
        }
      </ProjectMenuContainer>
    </MainProjectMenuContainer>
    {
      onEdit? <MisionVisionEdit values={ourValues}/>:null
    }
    
    </Columns>
)}


export default MisionVision;