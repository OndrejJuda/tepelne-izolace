import { AppContextProvider } from '../context/app-context';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}
