import React, { useEffect, useState } from 'react';
import { HSecondary, SectionWrapper } from './';
import { useWindowWidth } from '@react-hook/window-size';
import { Carousel } from '../components';

const Gallery = () => {

  const blowingInsualtionSlides = [
    "/gallery/lavka1.jpg",
    "/gallery/vata1.jpg",
    "/gallery/vata2.jpg",
    "/gallery/celuloza1.jpg",
    "/gallery/celuloza2.jpg",

  ]
  return (
    <SectionWrapper
      id='galerie'
      innerDivStyle='bg-primary-50 my-12 md:my-16 w-screen p-8 overflow-x-hidden flex flex-col justify-center items-center px-8 md:px-16 lg:px-36'
    >
      <HSecondary additionalStyling='mb-8 lg:mb-8 mt-8 text-2xl sm:text-2xl lg:text-3xl'>Galerie</HSecondary>
      <div className="flex justify-center mb-10">
        <div className="max-w-[800px]">
          <Carousel slides={blowingInsualtionSlides} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Gallery;