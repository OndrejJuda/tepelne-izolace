import { GoogleAnalytics } from 'nextjs-google-analytics';
import { AppContextProvider } from '../context/app-context';
import '../styles/globals.css';
import '../styles/survey.css';
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

      <script type="text/javascript" src="https://c.seznam.cz/js/rc.js" async></script>
      <script async dangerouslySetInnerHTML={{
        __html: `
        var retargetingConf = {
          rtgId: 1395987
        };
        if (window.rc && window.rc.retargetingHit) {
          window.rc.retargetingHit(retargetingConf);
        }
      ` }} />

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-J1PWYP518W"></script>
      <script async dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-J1PWYP518W');
      `}} />

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
    fbq('track', 'PageView');
  ` }} />

      <noscript dangerouslySetInnerHTML={{
        __html: `
    <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1747459502334265&ev=PageView&noscript=1"
    />
  ` }} />
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
