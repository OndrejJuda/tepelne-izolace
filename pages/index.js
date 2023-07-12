/* eslint-disable @next/next/no-sync-scripts */
import { Benefits, Footer, DemandFormSection, Header, Hero, Process, Services, Navbar, WebsiteHead, Gallery, ImageSection, FVE } from '../components';
import configuration from '../conf';
import CookieBot from 'react-cookiebot';

const { url } = configuration;
const domainGroupId = process.env.NEXT_PUBLIC_COOKIEBOT_DOMAIN_GROUP_ID;

export default function Home() {
  return (
    <div>
      <WebsiteHead canonicalHref={url} />
      {domainGroupId && (
        <CookieBot domainGroupId={domainGroupId} />
      )}
      <Navbar />
      <Header />
      <main className=''>
        <Hero />
        <DemandFormSection />
        {/* <ImageSection sectionName='predvadeci-obrazek' imageUrl='/business/vata.jpg' /> */}
        <Services />
        {/* <FVE /> */}
        <Benefits />
        <Process />
        <Gallery />
      </main>
      <Footer />
      <script type="text/javascript" src="https://c.seznam.cz/js/rc.js"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
        var retargetingConf = {
          rtgId: 1395987
        };
        if (window.rc && window.rc.retargetingHit) {
          window.rc.retargetingHit(retargetingConf);
        }
      ` }} />
    </div>
  );
}
