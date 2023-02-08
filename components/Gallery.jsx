import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HSecondary, SectionWrapper } from './';
import { AiOutlineInstagram } from 'react-icons/ai';

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
    }
  };

  let items = [];

  if (posts.length > 0) {
    items = posts.map(({ id, imageUrl, link }) => (
      <div
        key={id}
        className='rounded-lg group relative select-none 2alice:p-4'
      >
        <div className='absolute top-0 left-0 z-10 w-full h-full select-none'></div>
        {/* <Link href={link} target='_blank'>
          <AiOutlineInstagram className='absolute z-20 top-2 right-2 opacity-50 hover:opacity-100 text-primary-400 transition hover:scale-110' size={84} />
        </Link> */}
        {/* <div className='absolute top-0 left-0 w-full h-full bg-black transition opacity-0 group-hover:opacity-50 flex justify-center items-center select-none'>
          <div className='opacity-0 group-hover:opacity-100 transition delay-150'>
            <Link href={link} target='_blank'>
              <AiOutlineInstagram className='text-white transition hover:scale-110 hover:text-primary-400' size={124} />
            </Link>
          </div>
        </div> */}
        <img
          src={imageUrl}
          alt={imageUrl}
          className='w-full h-full object-cover rounded-lg select-none'
        />
      </div>
    ));
  }

  return (
    <SectionWrapper
      id='galerie'
      innerDivStyle='bg-secondary-600 w-screen pb-8 overflow-x-hidden flex flex-col justify-center items-center px-8 md:px-16 lg:px-36'
    >
      <HSecondary additionalStyling='mb-8 lg:mb-16 mt-16 text-3xl sm:text-4xl lg:text-5xl'>Nejnovější fotky z realizace</HSecondary>
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
              infinite
              swipeDelta={0}
            />
          )
          : (
            <p className='text-2xl text-primary-100'>Načítání...</p>
          )
      }
    </SectionWrapper>
  );
};

export default Gallery;