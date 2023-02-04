import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HSecondary, SectionWrapper } from './';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  900: { items: 2 },
  1400: { items: 3 },
  1800: { items: 4 },
};

const Gallery = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://api.woxo.tech/instagram?source=%40lunastavcz&count=20&type=hashtag&sort=top&token=null');
      const { data } = await response.json();
      const transformedData = data.map(({ id, image: imageUrl, link, text3: text, text7: date }) => ({
        id,
        imageUrl,
        link,
        text,
        date
      }));
      setPosts(transformedData);
    }

    fetchPosts();
  }, []);

  const slideHandler = ({ item, itemsInSlide }) => {
    if (item + itemsInSlide * 2 >= posts.length) {
      console.log('yes')
    }
  };

  let items = [];

  if (posts.length > 0) {
    items = posts.map(({ id, imageUrl, link, text, date }) => (
      <div
        key={id}
        className=''
      >
        <p>{imageUrl}</p>
        <p>{link}</p>
        <p>{text}</p>
        <p>{date}</p>
      </div>
    ));
  }

  return (
    <SectionWrapper
      id='benefity'
      innerDivStyle='bg-secondary-600 w-screen'
    >
      <HSecondary>Fotky z realizace</HSecondary>
      {
        items.length > 0
          ? (
            <AliceCarousel
              items={items}
              disableButtonsControls
              mouseTracking
              touchTracking
              responsive={responsive}
              onSlideChanged={slideHandler}
            />
          )
          : (
            <p>LOADING</p>
          )
      }
    </SectionWrapper>
  );
};

export default Gallery;