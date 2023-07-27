import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import { wrapper } from '@/src/store';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { theme } from '@/src/utils/theme';
import KeyboardEventHandler from '@/src/components/UtilComponents/KeyBoardHandler/KeyboardHandler';
import LayoutComponent from '@/src/components/Layout/LayoutComponent';
import AuthHandler from '@/src/components/UtilComponents/AuthHandler';
import Head from 'next/head';
import Toast from '@/src/utils/toast';

function App({ Component, ...rest }: AppProps) {
  // wrapping all the props with store wrapper
  const { store, props } = wrapper.useWrappedStore(rest);

  //this is used to overried the css of chakra ui
  const emotionCache = createCache({
    key: 'emotion-css-cache',
    prepend: true,
  })

  return (
    <>
      <Head>
        <title>Real Dev Squad</title>
        <link rel='icon' href='/images/Real-Dev-Squad@1x.svg' />
      </Head>
      <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <LayoutComponent>
            <AuthHandler>
              <KeyboardEventHandler>
                <Component {...props.pageProps} />
              </KeyboardEventHandler>
            </AuthHandler>
          </LayoutComponent>
        </Provider>
        <Toast />
      </ChakraProvider>
      </CacheProvider>
    </>
  );
}

export default App;
