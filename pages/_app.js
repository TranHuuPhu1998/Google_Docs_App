import 'tailwindcss/tailwind.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
            <title>Google Docs Clone</title>
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
