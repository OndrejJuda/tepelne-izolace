import { Grant, Footer, WebsiteHead } from '../components';
import configuration from '../conf';

const { url } = configuration;

const GrantPage = () => {
  return (
    <>
      <WebsiteHead titleSuffix=' - Dotace' canonicalHref={`${url}/dotace`} />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <Grant />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GrantPage;