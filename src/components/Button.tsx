import React from 'react';
import { buttonStyle, loginStyle, editStyle, tagStyle } from './Button.css';

type ButtonProps = {
  variant?: 'login' | 'edit' | 'tag';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string; // className 추가
};

const Button: React.FC<ButtonProps> = ({
  variant = 'login',
  children,
  onClick,
  className, // className prop 추가
}) => {
  let buttonVariantStyle = buttonStyle;
  if (variant === 'login') buttonVariantStyle = loginStyle;
  else if (variant === 'edit') buttonVariantStyle = editStyle;
  else if (variant === 'tag') buttonVariantStyle = tagStyle;

  return (
    <button
      className={`${buttonVariantStyle} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
