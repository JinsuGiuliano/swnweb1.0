import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectHomeValues } from '../../../redux/home/home.selectors';

import ValueItem from './values.component';
import MisionVisionEdit from './misionVisionEdit.component';
import { Columns } from '../contact/contact.styles';
import { ProjectMenuContainer, MainProjectMenuContainer } from '../projects/projects.styles';

const MisionVision = ({onEdit}) => {

  const ourValues = useSelector(selectHomeValues)

  return(
    <Fragment>
    {
      ourValues.length > 0 || ourValues !== undefined &&
      <Columns>
        <MainProjectMenuContainer>
        <h2 className="text-center">Over Ons</h2>
            <ProjectMenuContainer>
            {   console.log(ourValues) &&
                ourValues.map((el, idx) => (
                <ValueItem key={idx} data={el}/>
              ))
            }
          </ProjectMenuContainer>
        </MainProjectMenuContainer>
        {
          onEdit? <MisionVisionEdit values={ourValues}/>:null
        }
        
      </Columns>
    }
    </Fragment>
)}


export default MisionVision;