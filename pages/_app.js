import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
