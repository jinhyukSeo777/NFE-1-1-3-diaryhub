import React from 'react';
import { inputContainerStyle, inputStyle } from './Input.css';

type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode; // 아이콘을 넣을 경우 사용
  className?: string; // 추가 스타일 적용 가능
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  className,
}) => {
  return (
    <div className={`${inputContainerStyle} ${className || ''}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputStyle}
      />
    </div>
  );
};

export default Input;
