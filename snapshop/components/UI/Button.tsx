'use client';

import Link from 'next/link';
import Image from 'next/image';
import Spinner from '@/public/assets/spinner.gif';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  fontSize?: string;
  color?: string;
  hoverColor?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'filled' | 'transparent';
  fontWeight?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick = null,
  href,
  fontSize = 'sm',
  color = 'bg-red-500',
  hoverColor = 'hover:bg-red-600',
  isDisabled = false,
  isLoading = false,
  className = '',
  type = 'button',
  variant = 'filled',
  fontWeight = 'normal',
}) => {
  const filledButtonClass = `
    px-[2.5em] py-[1.15em] rounded text-white 
    text-${fontSize} 
    ${color}
    ${
      isDisabled || isLoading
        ? 'flex items-center justify-center space-x-2 bg-gray-500 opacity-70 cursor-not-allowed'
        : hoverColor
    }
    ${className}
  `;

  const transparentButtonClass = `
    bg-transparent border border-gray-600 text-gray-900 font-${fontWeight} 
    px-[2em] py-[0.8em] rounded ${className}
  `;

  const buttonClass =
    variant === 'filled' ? filledButtonClass : transparentButtonClass;

  const content = (
    <>
      {isLoading && (
        <Image
          src={Spinner}
          alt="Loading..."
          width={20}
          height={20}
          className="mr-2"
        />
      )}
      {text}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {content}
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
      {content}
    </button>
  );
};

export default Button;
