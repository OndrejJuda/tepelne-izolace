import Head from 'next/head';
import { Benefits, Footer, Contacts, Header, Hero, Process, Services, Navbar } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lunastav</title>
        <meta name="description" content="Tepelné izolace do každé rodiny" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
