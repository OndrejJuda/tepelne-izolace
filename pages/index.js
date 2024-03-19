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

      setIsStickyVisible(footerPosition > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <WebsiteHead canonicalHref={url} />
      {domainGroupId && (
        <CookieBot domainGroupId={domainGroupId} />
      )}
      <div className="absolute top-[-10px] left-0 w-full h-[440px]  md:h-[700px] z-0 shadow-md" style={{ backgroundImage: "url('/business/pozadi.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment: "absolute" }}></div>

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

    </div >
  );
}
