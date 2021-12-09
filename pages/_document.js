import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            nonce={nonce}
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-42Y4CHJT3E"
          ></script>
          <script
            nonce={nonce}
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "G-42Y4CHJT3E");`,
            }}
          />
          <title>Mark Murphy, Developer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
