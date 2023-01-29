import { Benefits, Footer, Contacts, Header, Hero, Process, Services, Navbar, WebsiteHead } from '../components';
import configuration from '../conf';

const { url } = configuration;


export default function Home() {
  return (
    <>
      <WebsiteHead canonicalHref={url} />
      <Navbar />
      <Header />
      <main>
        <Hero />
        <Contacts />
        <Benefits />
        <Services />
        <Process />
      </main>
      <Footer />
    </>
  );
}
