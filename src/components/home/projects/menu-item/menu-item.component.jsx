import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';



const MenuItem = ({ title, imageUrl, size, gallery, id }) => {

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate('/');
  console.log({ title, imageUrl, size, gallery, id })
  return(
          <MenuItemContainer
            size={size}
            onClick={onNavigateHandler}>
                <BackgroundImageContainer
                className='background-image'
                imageUrl={imageUrl}
                />
              <ContentContainer className='content'>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle><a href={imageUrl} data-lightbox={`gallery-mf-${id}`}><span>KNOW MORE</span></a></ContentSubtitle>
              </ContentContainer>
              {
                gallery &&
                gallery.map((el,idx) => 
                  (
                    <a key={idx} href={el} data-lightbox={`gallery-mf-${id}`}></a>
                  ))
              }
          </MenuItemContainer>
  )
}

export default MenuItem;
