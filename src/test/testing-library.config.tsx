import React from 'react';
import { render as renderTestingLibrary } from '@testing-library/react';
import ThemeProviderWrapper from '../theme/Theme.provider';

export const render = (Component: React.ReactElement) =>
    renderTestingLibrary(Component, { wrapper: ThemeProviderWrapper });

export * from '@testing-library/react';
