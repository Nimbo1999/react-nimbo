import { FC } from 'react';

import type { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <button style={{ border: 'none', backgroundColor: 'transparent' }} {...props}>
            {children}
        </button>
    );
};

export default Button;
