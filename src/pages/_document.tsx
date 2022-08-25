import Document, { Head, Html, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="NextSched" />
          <meta
            name="description"
            content="Organize your student schedule with NextSched. Currently in beta and more development coming soon."
          />
          <meta
            name="keywords"
            content="NextSched, Scheduler. College Planner, Planner"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Van AJ Vanguardia" />
          <meta
            name="google-site-verification"
            content="jXwUO7i9wLIGvvlFOrOQd7XumxaOjrQzJV0slwIb9Fw"
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
