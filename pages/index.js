import Head from 'next/head';
import { Benefits, Footer, Contacts, Header, Hero, Process, Services, Navbar } from '../components';

const TITLE = 'Lunastav CZ s.r.o.';
const DESCRIPTION = 'Tepelné izolace do každé rodiny.';
const URL = 'https://tepelne-izolace.netlify.app/';

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        {/* <!-- Primary Meta Tags --> */}
        <title>{TITLE}</title>
        <meta name='title' content={TITLE} />
        <meta name='description' content={DESCRIPTION} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={URL} />
        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:image' content='/business/metaimage.png' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={URL} />
        <meta property='twitter:title' content={TITLE} />
        <meta property='twitter:description' content={DESCRIPTION} />
        <meta property='twitter:image' content='/business/metaimage.png'></meta>
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
