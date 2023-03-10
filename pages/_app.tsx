import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "@/src/store";
import "@/styles/globals.css";

function App({ Component, ...rest }: AppProps) {
  // wrapping all the props with store wrapper
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default App;