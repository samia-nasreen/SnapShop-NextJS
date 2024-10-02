'use client';

import Link from 'next/link';

interface TransparentButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  fontWeight?: string;
  className?: string;
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
  text,
  onClick = null,
  href,
  fontWeight = 'normal',
  className = '',
}) => {
  const buttonClass = `bg-transparent border border-gray-600 text-gray-900 font-${fontWeight} px-[2em] py-[0.8em] rounded ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {text}
      </Link>
    );
  }

  return (
    <button onClick={onClick || undefined} className={buttonClass}>
      {text}
    </button>
  );
};

export default TransparentButton;
