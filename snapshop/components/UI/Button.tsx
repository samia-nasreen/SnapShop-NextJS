'use client';

import Link from 'next/link';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  fontSize?: string;
  color?: string;
  hoverColor?: string;
  isDisabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick = null,
  href,
  fontSize = 'sm',
  color = 'bg-red-500',
  hoverColor = 'hover:bg-red-600',
  isDisabled = false,
  className = '',
  type = 'button',
}) => {
  const buttonClass = `
    px-[2.5em] py-[1.15em] rounded text-white 
    text-${fontSize} 
    ${color}
    ${isDisabled ? 'bg-gray-500 opacity-50 cursor-not-allowed' : hoverColor}
    ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick || undefined}
      disabled={isDisabled}
      className={buttonClass}
    >
      {text}
    </button>
  );
};

export default Button;
