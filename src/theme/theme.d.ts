import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            white: string;
            black: string;
        };

        spacing: (value: number) => string;
    }
}
