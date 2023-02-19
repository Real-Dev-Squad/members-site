import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "@/src/store";
import type { AppProps } from "next/app";
import LayoutComponent from "@/components/Layout/LayoutComponent";

export default function App({ Component, pageProps }: AppProps) {
  return  (
    <Provider store = {store}> 
      <LayoutComponent>
        <Component {...pageProps} /> 
      </LayoutComponent>
    </Provider>
  ) 
}