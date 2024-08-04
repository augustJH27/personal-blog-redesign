import React from 'react';
import '../styles/globals.css';
import '../styles/app.css';
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }) => {
    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </React.StrictMode>
    );
};

export default MyApp;
