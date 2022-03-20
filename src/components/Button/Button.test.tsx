import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Button component tests', () => {
    test('Should render the children component', () => {
        render(<Button>Save Button</Button>);
        const button = screen.getByRole('button', { name: /save button/i });
        expect(button).toBeInTheDocument();
    });

    test('Should render button with default styles', () => {
        render(<Button>Default button</Button>);
        const button = screen.getByRole('button', { name: /default button/i });
        expect(button).toHaveStyle('background-color: blue');
        expect(button).toHaveStyle('color: black');
    });
});

// Todo: Import custom 'render' function of file src/test/testing-library.config.tsx here and
// Create a test with custom theme
