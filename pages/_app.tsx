import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Parse from 'parse';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import {CssBaseline} from '@mui/material';
import {theme} from '../src/theme';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache,
  APP_ID: string,
  JS_KEY: string,
  HOST_URL: string,
};

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  Parse.initialize(props.APP_ID as string, props.JS_KEY as string);
  Parse.serverURL = props.HOST_URL as string;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

function getStaticProps() {
  return {
    props: {
      APP_ID: process.env.APP_ID,
      JS_KEY: process.env.JS_KEY,
      HOST_URL: process.env.HOST_URL
    }
  }
}
