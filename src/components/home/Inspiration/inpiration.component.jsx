import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { selectHomeInspiration } from '../../../redux/home/home.selectors';
import InspirationEdit from './inpirationEdit.component';
import { Columns } from '../contact/contact.styles';
const Inspiration = ({onEdit}) => {

    const ourInspiration = useSelector(selectHomeInspiration);
    const {title, middleText, text, imageUrl} = ourInspiration 
    return(
      <Fragment>
      {
        ourInspiration &&
          <Columns>
          <div className="section-container section-half-background-image-container">
          <div className="image-column" style={{boxShadow: '10px 10px 80px #5b5555',backgroundImage: `url(${imageUrl})`}} />
          <div className="container">
            <div className="row">
            <div className="section-label reveal" data-sr-id={2} style={{visibility: 'visible', WebkitTransform: 'translateY(0) scale(1)', opacity: 1, transform: 'translateY(0) scale(1)', WebkitTransition: '-webkit-transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s', transition: 'transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s'}}>
            <p >{middleText}</p>
          </div>
              <div className="col-md-6 col-md-offset-6 text-column">
                <h2>{title}</h2>
                <h3 />
                <p>{text}</p>
              </div>
            </div>
          </div>
        </div>
        {
          onEdit? <InspirationEdit data={ourInspiration}/>:null
        }
        
        </Columns>
        }
      </Fragment>
    
    )
}

export default Inspiration;