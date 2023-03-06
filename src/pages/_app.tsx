import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

  html, body, #__next{
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
      box-sizing: border-box;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
