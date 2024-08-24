// import React from 'react';
// import '../styles/globals.css';
// import '../styles/app.css';
// import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
// import { ThemeProvider as StyledThemeProvider } from "styled-components";
// import theme from '../styles/theme';

// const MyApp = ({ Component, pageProps }) => {
//     return (
//         <React.StrictMode>
//             <MuiThemeProvider theme={theme}>
//                 <StyledThemeProvider theme={theme}>
//                     <Component {...pageProps} />
//                 </StyledThemeProvider>
//             </MuiThemeProvider>
//         </React.StrictMode>
//     );
// };

// export default MyApp;

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
        const tagManagerArgs = {
            gtmId: 'GTM-P4XNVJM9',
        };
        TagManager.initialize(tagManagerArgs);

        const handleRouteChange = (url) => {
            window.gtag('config', 'G-2Q2E77GN4D', { page_path: url }); // Replace with your GA tracking ID
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

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
                            gtag('config', 'G-2Q2E77GN4D');
                        `}
                    </Script>
                    <Component {...pageProps} />
                </StyledThemeProvider>
            </MuiThemeProvider>
        </React.StrictMode>
    );
};

export default MyApp;