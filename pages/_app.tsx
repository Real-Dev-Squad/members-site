import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import LayoutComponent from '@/components/Layout/LayoutComponent';

import { wrapper } from '@/src/store';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

function App({ Component, ...rest }: AppProps) {
  // wrapping all the props with store wrapper
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ChakraProvider>
      <Provider store={store}>
        <LayoutComponent>
          <Component {...props?.pageProps} />
        </LayoutComponent>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
