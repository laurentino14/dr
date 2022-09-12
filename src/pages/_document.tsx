import {Head, Html, Main, NextScript} from "next/document";
import {Footer} from "../components/footer";
import {Header} from "../components/header";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' type='image/png' href='/logo.png' />
      </Head>
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
