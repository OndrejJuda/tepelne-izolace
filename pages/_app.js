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
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
