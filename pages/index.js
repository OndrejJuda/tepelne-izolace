import { Benefits, Footer, Contacts, Header, Hero, Process, Services, Navbar, WebsiteHead } from '../components';
import configuration from '../conf';

const { url } = configuration;


export default function Home() {
  return (
    <>
      <WebsiteHead canonicalHref={url} />
      <Navbar />
      <Header />
      <main className='bg-secondary-700'>
        <Hero />
        <Services />
        <Benefits />
        <Contacts />
        <Process />
      </main>
      <Footer />
    </>
  );
}
