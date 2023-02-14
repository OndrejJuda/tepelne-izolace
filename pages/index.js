import { Benefits, Footer, DemandFormSection, Header, Hero, Process, Services, Navbar, WebsiteHead, Gallery } from '../components';
import configuration from '../conf';
import CookieBot from 'react-cookiebot';

const { url } = configuration;
const domainGroupId = process.env.NEXT_PUBLIC_COOKIEBOT_DOMAIN_GROUP_ID;
console.log('domainGroupId:', domainGroupId);

export default function Home() {
  return (
    <div>
      <WebsiteHead canonicalHref={url} />
      {domainGroupId && (
        <CookieBot domainGroupId={domainGroupId} />
      )}
      <Navbar />
      <Header />
      <main className='bg-secondary-700'>
        <Hero />
        <Services />
        <Benefits />
        <DemandFormSection />
        <Process />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
