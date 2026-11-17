import type { AppProps } from "next/app";
import { TinaProvider } from "tinacms";
import { tinaClient } from "../lib/tina";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TinaProvider cms={tinaClient as unknown as import("tinacms").TinaCMS}>
      <Component {...pageProps} />
    </TinaProvider>
  );
}
