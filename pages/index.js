import { Benefits, Footer, Contacts, Header, Hero, Process, Services, Navbar, WebsiteHead } from '../components';


export default function Home() {
  return (
    <>
      <WebsiteHead />
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
