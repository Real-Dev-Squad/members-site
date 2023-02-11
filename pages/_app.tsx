import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { wrapper } from "@/src/store";

function App({ Component, ...rest }: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default App;