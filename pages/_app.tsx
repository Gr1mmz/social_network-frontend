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
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  Parse.initialize(process.env.NEXT_PUBLIC_PARSE_APPLICATION_ID as string,
    process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY as string);
  Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_HOST_URL as string;

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
  );
}

export default MyApp;
