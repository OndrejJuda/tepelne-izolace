/* eslint-disable @next/next/no-sync-scripts */
import { Contacts, Footer, WebsiteHead } from '../components';
import configuration from '../conf';

const { url } = configuration;

const ContactsPage = () => {
  return (
    <>
      <WebsiteHead titleSuffix=' - Kontakty' canonicalHref={`${url}/kontakty`} />
      <div className='min-h-screen flex flex-col'>
        <main className='flex-1'>
          <Contacts />
        </main>
        <Footer />
        <script type="text/javascript" src="https://c.seznam.cz/js/rc.js"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
        var retargetingConf = {
          rtgId: 1395987
        };
        if (window.rc && window.rc.retargetingHit) {
          window.rc.retargetingHit(retargetingConf);
        }
      ` }} />
      </div>
    </>
  );
};

export default ContactsPage;