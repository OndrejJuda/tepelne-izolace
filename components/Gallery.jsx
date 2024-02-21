import React, { useEffect, useState } from 'react';
import { HSecondary, SectionWrapper } from './';
import { useWindowWidth } from '@react-hook/window-size';

const Gallery = () => {
  const useWidth = useWindowWidth();
  const [sizeClassName, setSizeClassName] = useState(undefined);

  useEffect(() => {

    if (useWidth > 1000) {
      setSizeClassName('big');
    } else if (useWidth < 600) {
      setSizeClassName('small');
    } else {
      setSizeClassName('medium');
    }
  }, [useWidth]);

  return (
    <SectionWrapper
      id='galerie'
      innerDivStyle='bg-primary-50 my-32 md:my-32 w-screen p-8 overflow-x-hidden flex flex-col justify-center items-center px-8 md:px-16 lg:px-36'
    >
      <HSecondary additionalStyling='mb-8 lg:mb-16 mt-8 text-2xl sm:text-2xl lg:text-3xl'>Galerie</HSecondary>
      <div className={`gallery__woxo-carousel--${sizeClassName}`}>
        <div data-mc-src="2321a380-7adb-403f-a172-a9103affccf3#instagram"></div>

        <script
          src="https://cdn2.woxo.tech/a.js#65cdfc5f13d9d3047ad36ff6"
          async data-usrc>
        </script>
      </div>
    </SectionWrapper>
  );
};

export default Gallery;