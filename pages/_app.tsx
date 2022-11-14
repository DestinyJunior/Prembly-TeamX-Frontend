import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { setCookie } from "cookies-next";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <Head>
        <title>Customa-X</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider
        theme={{
          colors: {
            brand: [
              "#e5e8ff",
              "#b7bcfd",
              "#898ff6",
              "#5a62f1",
              "#2d35ec",
              "#151bd3",
              "#0e15a5",
              "#080f77",
              "#03084a",
              "#00021e",
            ],
          },
          primaryColor: "brand",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <NotificationsProvider>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
