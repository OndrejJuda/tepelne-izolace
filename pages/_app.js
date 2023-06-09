import { GoogleAnalytics } from 'nextjs-google-analytics';
import { AppContextProvider } from '../context/app-context';
import '../styles/globals.css';
import Script from 'next/script';

const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      {
        measurementId && (
          <GoogleAnalytics gaMeasurementId={measurementId} trackPageViews />
        )
      }

      <Script type='text/javascript' src='https://c.seznam.cz/js/rc.js' />
      <Script id='sklik-seznam'>
        {`var conversionConf = {
          id: 100178723,
          value: null
          };
          if (window.rc &amp;&amp; window.rc.conversionHit) {
            window.rc.conversionHit(conversionConf);
          }`}
      </Script>
      <Script id='sklik-seznam-rtg'>
        {`var retargetingConf = {
          rtgId: 1395987
          };
          if (window.rc &amp;&amp; window.rc.retargetingHit) {
          window.rc.retargetingHit(retargetingConf);
          }`}
      </Script>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
