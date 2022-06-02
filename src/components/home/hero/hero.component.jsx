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
            <div className="background-image-container white-text-container" style={{backgroundImage: `url(${data.imageUrl})`}}>
            <div className="overlay" />
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1 style={{textShadow: '5px 5px 60px #000'}} >{data.title}</h1>
                  <p>{data.subtitle}</p>
                  <a href="#contact-section-container" className="btn btn-primary btn-lg anchor-link shadow" title="">Get in touch</a>
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