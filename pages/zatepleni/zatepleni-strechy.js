import { InsulationRoof, Footer, WebsiteHead } from '../../components';
import configuration from '../../conf';

const { url } = configuration;

const InsulationRoofPage = () => {
  return (
    <>
      <WebsiteHead titleSuffix=' - Zateplení střechy' canonicalHref={`${url}/zatepleni/zatepleni-strechy`} />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <InsulationRoof />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default InsulationRoofPage;