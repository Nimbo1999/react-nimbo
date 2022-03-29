import { render, screen, theme } from '../../test/testing-library.config';

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

    test('Should render button with primary styles', () => {
        render(<Button btnType="primary">Primary button</Button>);
        const button = screen.getByRole('button', { name: /primary button/i });
        expect(button).toHaveStyle(`background-color: ${theme.palette.primary.base};`);
        expect(button).toHaveStyle(`color: ${theme.palette.white};`);
    });
});

// Todo: Create a test with custom theme
