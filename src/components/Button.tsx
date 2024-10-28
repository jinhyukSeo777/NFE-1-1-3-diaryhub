import React from 'react';
import { buttonStyle, loginStyle, editStyle, tagStyle } from './Button.css';

type ButtonProps = {
  variant?: 'login' | 'edit' | 'tag';
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'login',
  children,
  onClick,
}) => {
  let buttonVariantStyle = buttonStyle;
  if (variant === 'login') buttonVariantStyle = loginStyle;
  else if (variant === 'edit') buttonVariantStyle = editStyle;
  else if (variant === 'tag') buttonVariantStyle = tagStyle;

  return (
    <button className={buttonVariantStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
