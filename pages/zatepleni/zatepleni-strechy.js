import { InsulationRoof, Footer, WebsiteHead, StickyPhoneNumber } from '../../components';
import configuration from '../../conf';
import React, { useState, useEffect } from 'react';

const { url } = configuration;

const InsulationRoofPage = () => {
  const [isStickyVisible, setIsStickyVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      const footerPosition = footer.getBoundingClientRect().top;

      // Hide the sticky phone number when user scrolls to the footer
      setIsStickyVisible(footerPosition > window.innerHeight);
    };

    // Attach the event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <WebsiteHead titleSuffix=' - Zateplení střechy' canonicalHref={`${url}/zatepleni/zatepleni-strechy`} />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <InsulationRoof />
        </main>
        {isStickyVisible && <StickyPhoneNumber />}
        <div id="footer" >
          <Footer />
        </div>
      </div>
    </>
  );
};

export default InsulationRoofPage;