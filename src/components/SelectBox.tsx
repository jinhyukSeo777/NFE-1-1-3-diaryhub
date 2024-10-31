import { useState } from 'react';
import {
  select,
  dropdown,
  arrow,
  optionList,
  option,
} from '../styles/SelectBox.css';

interface SelectBoxProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const CustomSelectBox = ({ options, onChange }: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={select}>
      <div className={dropdown} onClick={toggleDropdown}>
        {selectedOption || '지역선택'}
        <span className={arrow} />
      </div>
      {isOpen && (
        <ul className={optionList}>
          {options.map((optionData) => (
            <li
              key={optionData.value}
              className={option}
              onClick={() => handleOptionClick(optionData.value)}
            >
              {optionData.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelectBox;
