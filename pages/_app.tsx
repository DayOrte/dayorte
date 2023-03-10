import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Dallana S Ortega</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
