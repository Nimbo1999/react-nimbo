import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Button component tests', () => {
    test('Should render the children component', () => {
        render(<Button>Save Button</Button>);
        const button = screen.getByRole('button', { name: /save button/i });
        expect(button).toBeInTheDocument();
    });
});
