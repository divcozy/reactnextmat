import React from 'react'
import App from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';

import Layout from '../components/Layout'
import { LayoutProvider } from "../context/LayoutContext";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <LayoutProvider>
            <Layout>
              <CssBaseline />
              <Component {...pageProps} />
            </Layout>
          </LayoutProvider>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

export default MyApp