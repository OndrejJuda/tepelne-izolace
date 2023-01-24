import { CoinContextProvider } from '../context/app-context';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <CoinContextProvider>
      <Component {...pageProps} />
    </CoinContextProvider>
  );
}
