import { Contacts, Footer, WebsiteHead } from '../components';
import configuration from '../conf';

const { url } = configuration;

const ContactsPage = () => {
  return (
    <>
      <WebsiteHead titleSuffix=' - Kontakty' canonicalHref={`${url}/kontakty`} />
      <div className='min-h-screen flex flex-col'>
        <main className='bg-secondary-700 flex-1'>
          <Contacts />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactsPage;