import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import FormLoginWithMotion from "./components/FormLoginWithMotion";

const theme = createTheme();

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <FormLoginWithMotion />
        </ThemeProvider>
    );
};

export default App;
