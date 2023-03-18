import type { AppProps } from "next/app";
import LayoutComponent from "@/components/Layout/LayoutComponent";
import { Provider } from "react-redux";
import { wrapper } from "@/src/store";
import "@/styles/globals.css";

function App({ Component, ...rest }: AppProps) {
  // wrapping all the props with store wrapper
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <LayoutComponent>
        <Component {...props} />
      </LayoutComponent>
    </Provider>
  );
}

export default App;
