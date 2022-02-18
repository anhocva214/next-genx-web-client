import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '@store/index';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import '../scss/bootstrap5.0.2/bootstrap.scss'
// import '../scss/font-awesome6pro/scss/fontawesome.scss'
// import 'antd/dist/antd.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Next GenX" />
        <meta name="author" content="Next GenX" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <title>Next GenX</title>

        {/* STYLES */}
        <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="css/plugins.css" />
        <link rel="stylesheet" type="text/css" href="css/colors.css" />
        <link rel="stylesheet" type="text/css" href="css/darkMode.css" />
        <link rel="stylesheet" type="text/css" href="css/rtl.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        {/*[if lt IE 9]>  <![endif]*/}
        {/* /STYLES */}


      </Head>

      <Alert stack={{ limit: 3 }} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

    </>
  )
}

export default App
