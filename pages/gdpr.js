import Head from 'next/head';
import { GDPR, Footer, WebsiteHead } from '../components';
import configuration from '../conf';

const { url } = configuration;

const GDPRPage = () => {

  return (
    <>
      <WebsiteHead titleSuffix=' - GDPR' canonicalHref={`${url}/gdpr`} />
      <div className='min-h-screen flex flex-col'>
        <main className='bg-secondary-700'>
          <GDPR />
        </main>
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default GDPRPage;