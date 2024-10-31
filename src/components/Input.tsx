// Input.tsx
import React, { useState } from 'react';
import { inputContainerStyle, inputStyle, iconStyle } from './Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // 추가 스타일 적용 가능
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`${inputContainerStyle} ${className || ''}`}>
      <input
        type={isPasswordType && !showPassword ? 'password' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputStyle}
      />
      {isPasswordType && (
        <span className={iconStyle} onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </span>
      )}
    </div>
  );
};

export default Input;
