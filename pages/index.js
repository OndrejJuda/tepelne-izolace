import Head from 'next/head';
import { Benefits, Footer, Contacts, Header, Hero, Process, Services, Navbar } from '../components';
import configuration from '../conf';

const { title, description, url } = configuration;

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
        <meta name='msapplication-TitleColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />

        {/* <!-- Primary Meta Tags --> */}
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/business/metaimage.png' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
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
