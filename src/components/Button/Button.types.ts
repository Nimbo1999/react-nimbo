import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'default' | 'primary' | 'success' | 'error' | 'warning' | 'info';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: ButtonType;
}
