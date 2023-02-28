import React from 'react';
import { SectionWrapper } from './';

const ImageSection = ({ sectionName, imageUrl }) => {
  return (
    <SectionWrapper
      id={sectionName}
      innerDivStyle='lg:flex rounded-lg overflow-hidden shadow-xl mx-8 md:mx-16 lg:mx-36 w-full'
    >
      <img
        src={imageUrl}
        alt={sectionName}
        className='w-full h-[600px] lg:h-full object-cover'
      />
    </SectionWrapper>
  );
};

export default ImageSection;