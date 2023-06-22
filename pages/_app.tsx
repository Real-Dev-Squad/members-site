import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import { wrapper } from '@/src/store';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { theme } from '@/src/utils/theme';
import KeyboardEventHandler from '@/src/components/UtilComponents/KeyBoardHandler/KeyboardHandler';
import LayoutComponent from '@/src/components/Layout/LayoutComponent';
import AuthHandler from '@/src/components/UtilComponents/AuthHandler';
import Head from 'next/head';

function App({ Component, ...rest }: AppProps) {
  // wrapping all the props with store wrapper
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <>
      <Head>
        <title>Real Dev Squad</title>
        <link rel='icon' href='/images/Real-Dev-Squad@1x.svg' />
      </Head>
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
      </ChakraProvider>
    </>
  );
}

export default App;
