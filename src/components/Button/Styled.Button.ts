import Styled, { css } from 'styled-components';
import type { ButtonProps } from './Button.types';

const buttonPrimary = css`
    background-color: ${({ theme }) => theme.palette.primary.base};
    color: ${({ theme }) => theme.palette.white};
`;

export const Button = Styled.button<ButtonProps>`
    apperance: none;
    border: none;
    background-color: blue;
    color: black;
    padding: 4px 8px;
    ${({ btnType }) => {
        switch (btnType) {
            case 'primary':
                return buttonPrimary;
            default:
                return '';
        }
    }}
`;
