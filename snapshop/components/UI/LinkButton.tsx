'use client';

import Link from 'next/link';

interface LinkButtonProps {
  text: string;
  href: string;
  fontSize?: string;
  color?: string;
  hoverColor?: string;
  isDisabled?: boolean;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  text,
  href,
  fontSize = 'sm',
  color = 'bg-red-500',
  hoverColor = 'hover:bg-red-600',
  isDisabled = false,
  className = '',
}) => {
  return (
    <Link href={href} passHref>
      <button
        className={`
          px-[2.5em] py-[1.15em] rounded text-white 
          text-${fontSize} 
          ${color}
          ${
            isDisabled
              ? 'bg-gray-500 opacity-50 cursor-not-allowed'
              : hoverColor
          }
          ${className}
        `}
        disabled={isDisabled}
        {...(isDisabled && { onClick: (e) => e.preventDefault() })}
      >
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
