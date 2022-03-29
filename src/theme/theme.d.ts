import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            white: string;
            background: {
                base: string;
                light: string;
            };
            primary: {
                base: string;
                light: string;
            };
            util: {
                success: string;
                error: string;
                warning: string;
                info: string;
            };
            grey: {
                base: string;
            };
        };

        borderRadius: string;

        spacing: (value: number) => string;
    }
}
