import { DefaultTheme } from 'styled-components';

const BASE_UNIT = Number(process.env.STYLE_BASE_UNIT) || 8;

const theme: DefaultTheme = {
    palette: {
        white: '#ffffff',
        black: '#000000'
    },

    spacing: (value: number) => `${BASE_UNIT * value}px`
};

export default theme;
