import React from 'react';
import App, { Container, NextAppContext } from 'next/app';
import { withRouter, WithRouterProps } from 'next/router';
import { Page } from '../components/Page/Page';

/**
 * RouterProps is the type that must be used in order to get `withRouter` working. 
 */
type RouterProps = WithRouterProps<Record<string, string | string[] | undefined>>

/**
 * CustomApp overrides the default injection point that nextjs uses, so we can handle routes and 
 * make all the pages use a default Page object. 
 * 
 * You can conditionally make Page be used by using the router's pathname if you would like, but
 * you shouldn't need to in most cases.
 * 
 * Last Modified
 *      William Kwok
 *      June 6, 2019
 */
class CustomApp extends App<RouterProps> {
    static async getInitialProps({ Component, ctx }: NextAppContext) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, router } = this.props;
        console.log(router);
        return < Container >
            <Page pathname={router.pathname}>
                <Component {...pageProps} year={router && router.query && router.query.year} />
            </Page>
        </Container >
    }
}

export default withRouter(CustomApp);