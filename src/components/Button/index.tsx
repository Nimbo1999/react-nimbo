import { FC } from 'react';

import type { ButtonProps } from './Button.types';

import { Button } from './Styled.Button';

const ReactNimboButton: FC<ButtonProps> = ({
    btnType = 'default',
    children,
    ...props
}) => {
    return (
        <Button btnType={btnType} {...props}>
            {children}
        </Button>
    );
};

export default ReactNimboButton;
