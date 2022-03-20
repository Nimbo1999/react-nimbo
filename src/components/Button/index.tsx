import { FC } from 'react';

import type { ButtonProps } from './Button.types';

import { Button } from './Styled.Button';

const ReactNimboButton: FC<ButtonProps> = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
};

export default ReactNimboButton;
