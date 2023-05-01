import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';

import LayoutComponent from '@/components/Layout/LayoutComponent';

import { wrapper } from '@/src/store';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { theme } from '@/src/utils/theme';
import KeyboardEventHandler from '@/src/components/UtilComponents/KeyBoardHandler/KeyboardHandler';

function App({ Component, ...rest }: AppProps) {
  // wrapping all the props with store wrapper
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <LayoutComponent>
          <KeyboardEventHandler>
            <Component {...props} />
          </KeyboardEventHandler>
        </LayoutComponent>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
