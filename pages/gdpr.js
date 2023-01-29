import Head from 'next/head';
import { GDPR, Footer, WebsiteHead } from '../components';
import configuration from '../conf';

const { title, description, url } = configuration;

const GDPRPage = () => {

  return (
    <>
      <WebsiteHead titleSuffix=' - GDPR' />
      <div className='min-h-screen flex flex-col'>
        <main>
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