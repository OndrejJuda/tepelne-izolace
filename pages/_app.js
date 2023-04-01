import { GoogleAnalytics } from 'nextjs-google-analytics';
import { AppContextProvider } from '../context/app-context';
import '../styles/globals.css';

const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      {
        measurementId && (
          <GoogleAnalytics gaMeasurementId={measurementId} trackPageViews />
        )
      }
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
