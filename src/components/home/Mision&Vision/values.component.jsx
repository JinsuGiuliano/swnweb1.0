import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './values.styles';

const ValueItem = ({ data }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate('/');
  return(
    <Fragment>
    {
      data &&
      <MenuItemContainer
        onClick={onNavigateHandler}
      >
        <BackgroundImageContainer
          className='background-image'
          imageUrl={data.imageUrl}
        />
        <ContentContainer className='content'>
        <ContentTitle>{data.title.toUpperCase()}</ContentTitle>
        </ContentContainer>
        <ContentSubtitle>{data.text}</ContentSubtitle>
      </MenuItemContainer>
    }
  </Fragment>
)}

export default ValueItem;
