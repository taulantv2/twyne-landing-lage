import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Twyne</title>
        <meta name="description" content="Connecting Lending Markets through a Credit-Layer" />
        <meta property="og:title" content="Twyne" />
        <meta property="og:description" content="Connecting Lending Markets through a Credit-Layer" />
        <meta property="og:site_name" content="Twyne" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp