import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import queryClient from '@/config/query_client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import wrapper from '@/store';
import store from '@/store';
import { fetchMe } from '@/features/auth/services';
import { setLogin, setMe } from '@/features/auth/slices';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    fetchMe()
      .then((response) => store.dispatch(setMe(response.data.data)))
      .catch((err) => console.log(err))
      .finally(() => setReady(true));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ToastContainer />
        <ChakraProvider>{ready && <Component {...pageProps} />}</ChakraProvider>
      </Provider>
      <Script
        type={'module'}
        strategy={'afterInteractive'}
        src={'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'}
      />
    </QueryClientProvider>
  );
}

export default MyApp;
