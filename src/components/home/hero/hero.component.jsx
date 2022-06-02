import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import { selectHomeHero } from '../../../redux/home/home.selectors';
import HeroEdit from './heroEdit.component';
import { Columns } from '../contact/contact.styles';

const Hero = ({onEdit}) => {

  const data = useSelector(selectHomeHero);

    return(
      <Fragment>
      {
        data && 
            <Columns>
            <div className="background-image-container white-text-container" style={{backgroundImage: `url(${data.imageUrl})`,height:'600px', width: '100%',padding:'20px'}}>
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1 style={{textShadow: '5px 5px 30px #000', fontSize: '60px'}} >{data.subTitle}</h1>
                  <p style={{textShadow: '5px 5px 30px #000', fontSize: '30px'}}>{data.title}</p>
                </div>
              </div>
            </div>
          </div>
          {
            onEdit? <HeroEdit data={data}/>:null
          }
        
          </Columns>}
    </Fragment>
    )
}

export default Hero;