import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

interface MyDocumentInterface {
  url: string
  title: string
  description: string
}

class MyDocument extends Document implements MyDocumentInterface {
  url = process.env.NEXT_PUBLIC_SITE_URL
  title = 'Demo'
  description = 'test text'

  render(): JSX.Element {
    return (
      <Html lang="ja-JP">
        <Head>
          {/* コメント */}
          <meta name="description" content={this.description} />
          <meta name="theme-color" content="#333" />
          <meta property="og:title" content={this.title} />
          <meta property="og:description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:image" content={`${this.url}/ogp.png`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
