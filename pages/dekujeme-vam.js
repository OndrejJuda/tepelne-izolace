import { FormSentRedirect, Footer, WebsiteHead } from '../components';
import configuration from '../conf';

const { url } = configuration;

const FormSentRedirectPage = () => {
  return (
    <>
      <WebsiteHead titleSuffix=' - Děkujeme Vám!' canonicalHref={`${url}/dekujeme-vam`} />
      <div className='min-h-screen flex flex-col'>
        <script type="text/javascript" src="https://c.seznam.cz/js/rc.js" async></script>
        <script async dangerouslySetInnerHTML={{
          __html: `
      var conversionConf = {
        id: 100178723,
        value: null
      };
      if (window.rc && window.rc.conversionHit) {
        window.rc.conversionHit(conversionConf);
      }
      ` }} />
        <main className='flex-1'>
          <FormSentRedirect />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FormSentRedirectPage;