import { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "react-toastify";


export default function Document() {
  
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/u1.jpg" />
        <title>Rasel Chowdhury Portfolio</title>
      </Head>
      <body className="font-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
