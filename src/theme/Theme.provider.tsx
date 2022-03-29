import { FC } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const BASE_UNIT = Number(process.env.STYLE_BASE_UNIT) || 8;

export const theme: DefaultTheme = {
    palette: {
        white: '#E2E2E2',
        background: {
            base: '#02010D',
            light: '#F5F4FB'
        },
        primary: {
            base: '#6D4CF1',
            light: '#B6A7F1'
        },
        util: {
            success: '#00AB11',
            error: '#B90F0F',
            warning: '#E3B71B',
            info: '#00A1AB'
        },
        grey: {
            base: '#74727A'
        }
    },

    borderRadius: '6px',

    spacing: (value: number) => `${BASE_UNIT * value}px`
};

const ThemeProviderWrapper: FC = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ThemeProviderWrapper;
