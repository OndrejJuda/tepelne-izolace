import { Insulation, Footer, WebsiteHead } from '../components';
import configuration from '../conf';

const { url } = configuration;

const InsulationPage = () => {
  return (
    <>
      <WebsiteHead titleSuffix=' - Zateplení' canonicalHref={`${url}/zatepleni`} />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <Insulation />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default InsulationPage;