import { Footer, WebsiteHead, InsulationFacade } from '../../components';
import configuration from '../../conf';

const { url } = configuration;

const InsulationFacadePage = () => {
  return (
    <>
      <WebsiteHead titleSuffix=' - Zateplení fasády' canonicalHref={`${url}/zatepleni/zatepleni-fasady`} />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <InsulationFacade />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default InsulationFacadePage;