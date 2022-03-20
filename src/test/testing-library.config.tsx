import React, { FC } from 'react';
import { render as renderTestingLibrary } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/Theme.provider';

const ThemeProviderWrapper: FC = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const render = (Component: React.ReactElement) =>
    renderTestingLibrary(Component, { wrapper: ThemeProviderWrapper });

export * from '@testing-library/react';
