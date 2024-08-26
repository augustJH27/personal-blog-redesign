import React, { useEffect } from 'react';
import '../styles/globals.css';
import '../styles/app.css';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Script from 'next/script';
import theme from '../styles/theme';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-P4XNVJM9' });

        const handleRouteChange = (url) => {
            window.gtag('config', 'G-Z037FVWPQ0', { page_path: url });
            trackVirtualPageview();
        };

        trackVirtualPageview();
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    const trackVirtualPageview = () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'virtualPageview',
            pagePath: window.location.pathname,
            pageTitle: document.title
        });
    };

    return (
        <React.StrictMode>
            <MuiThemeProvider theme={theme}>
                <StyledThemeProvider theme={theme}>
                    <Script
                        id="google-analytics"
                        strategy="afterInteractive"
                    >
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-Z037FVWPQ0');
                        `}
                    </Script>
                    <Component {...pageProps} />
                </StyledThemeProvider>
            </MuiThemeProvider>
        </React.StrictMode>
    );
};

export default MyApp;