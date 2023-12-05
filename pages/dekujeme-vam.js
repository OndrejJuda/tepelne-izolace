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
        <script dangerouslySetInnerHTML={{
          __html: `
    !function(f,b,e,v,n,t,s) {
      if(f.fbq) return;
      n=f.fbq=function(){n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
      if(!f._fbq) f._fbq=n;
      n.push=n;
      n.loaded=!0;
      n.version='2.0';
      n.queue=[];
      t=b.createElement(e);
      t.async=!0;
      t.src=v;
      s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }(window, document, 'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1747459502334265');
    fbq('track', 'Lead');
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