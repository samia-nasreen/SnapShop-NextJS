/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { UseFormRegister, FieldErrors, FieldError } from 'react-hook-form';

interface InputProps {
  name: string;
  type?: string;
  variant?: 'bordered' | 'rounded' | 'line';
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  fontSize?: string;
  width?: string;
  padding?: string;
  borderColor?: string;
  label?: string;
  defaultValue?: string;
  required?: boolean;
  register?: UseFormRegister<any>;
  errors?: FieldErrors<any>;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  name,
  type = 'text',
  variant = 'bordered',
  placeholder = '',
  value,
  onChange,
  className = '',
  fontSize = '',
  width = 'w-full',
  padding = 'p-4',
  borderColor = 'border-gray-600',
  label,
  defaultValue,
  required = false,
  register,
  errors,
  ...rest
}) => {
  const borderedClass = `border-[1.5px] ${borderColor} rounded ${padding} ${width} ${fontSize} ${className}`;
  const roundedClass = `block w-full p-4 border-none bg-zinc-100 rounded-md ${className}`;
  const lineClass = `underline-input ${className}`;

  const inputClass =
    variant === 'bordered'
      ? borderedClass
      : variant === 'rounded'
      ? roundedClass
      : lineClass;

  const renderErrorMessage = () => {
    if (errors && errors[name]) {
      return (
        <p className="text-red-500 text-sm mb-2">
          {(errors[name] as FieldError)?.message || 'Invalid input'}
        </p>
      );
    }
    return null;
  };

  const renderLabel = () => {
    if (label) {
      return (
        <label className="block font-medium text-gray-600 mb-1">
          {label}
          {required && <span className="text-red-400">*</span>}
        </label>
      );
    }
    return null;
  };

  return (
    <div className="mb-6">
      {renderLabel()}
      <input
        {...(register ? register(name, { required }) : {})}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        className={inputClass}
        {...rest}
      />
      {renderErrorMessage()}
    </div>
  );
};

export default Input;
