import { Insulation, InsulationCieling, Footer, WebsiteHead } from './//../../components';
import configuration from '../../conf';

const { url } = configuration;

const InsulationCielingPage = () => {
  return (
    <>
      <WebsiteHead titleSuffix=' - Zateplení stropu' canonicalHref={`${url}/zatepleni/zatepleni-stropu`} />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <InsulationCieling />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default InsulationCielingPage;