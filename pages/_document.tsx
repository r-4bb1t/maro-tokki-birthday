import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>마로와 현채의 생일파티 2023</title>
        <meta property="og:title" content="마로와 현채의 생일파티 2023" />
        <meta
          property="og:image"
          content="https://maro-tokki-birthday.vercel.app/meta.png"
        />
        <meta
          property="og:url"
          content="https://maro-tokki-birthday.vercel.app"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
