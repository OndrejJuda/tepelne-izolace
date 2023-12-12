import { Benefits, Footer, DemandFormSection, Header, Hero, Process, Services, Navbar, WebsiteHead, Gallery, ImageSection, Offer, FVE, StickyPhoneNumber } from '../components';
import configuration from '../conf';
import CookieBot from 'react-cookiebot';
import React, { useState, useEffect } from 'react';
import ScrollButton from '../components/ScrollButton';


const { url } = configuration;
const domainGroupId = process.env.NEXT_PUBLIC_COOKIEBOT_DOMAIN_GROUP_ID;

export default function Home() {
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
    <div>
      <WebsiteHead canonicalHref={url} />
      {domainGroupId && (
        <CookieBot domainGroupId={domainGroupId} />
      )}
      <Header />
      <main className=''>
        <Hero />
        {/* <ImageSection sectionName='predvadeci-obrazek' imageUrl='/business/vata.jpg' /> */}
        {/*<Services />*/}
        <Offer />
        {/* <FVE /> */}
        <Benefits />
        <Process />
        <DemandFormSection />
        <Gallery />
        <div>
          {/* Další obsah stránky */}
          <ScrollButton />
        </div>
      </main>
      <div>
        {isStickyVisible && <StickyPhoneNumber />}
        <div id="footer" >
          <Footer />
        </div>
      </div>

    </div>
  );
}
