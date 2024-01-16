import { RenderOptions, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import { PropsWithChildren } from 'react';

export const renderWithProviders = (
  ui: React.ReactElement,
  { ...renderOptions }: RenderOptions = {},
) => {
  function Wrapper({
    children,
  }: PropsWithChildren<Record<string, any>>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
