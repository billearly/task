import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faLightbulb } from '@fortawesome/free-solid-svg-icons';

library.add(faStream, faLightbulb);

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render () {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>True Task</title>
                </Head>
                <Component {...pageProps} />
            </Container>
        );
    }
}
