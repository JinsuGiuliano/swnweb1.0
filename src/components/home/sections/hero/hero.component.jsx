import React from 'react'
import { useSelector } from 'react-redux';
import { selectHomeHero } from '../../../../redux/home/home.selectors';

const Hero = () => {

  const data = useSelector(selectHomeHero);

    return(
      <div className="background-image-container white-text-container" style={{backgroundImage: `url(${data.imageUrl})`}}>
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h1 style={{textShadow: '5px 5px 60px #000'}} >{data.title}</h1>
            <p>{data.subTitle}</p>
            <a href="#contact-section-container" className="btn btn-primary btn-lg anchor-link shadow" title="">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
    
    )
}

export default Hero;