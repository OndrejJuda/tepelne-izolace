import { Grant, Footer, WebsiteHead } from '../components';
import configuration from '../conf';

const { url } = configuration;

const GrantPage = () => {
  return (
    <>
      <WebsiteHead titleSuffix=' - Dotace' canonicalHref={`${url}/dotace`} />
      <div className='min-h-screen flex flex-col'>
        <main className='bg-secondary-700'>
          <Grant />
        </main>
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default GrantPage;