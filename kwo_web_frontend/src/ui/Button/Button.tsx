import type { JSX, ReactNode } from 'react';

function Button({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 rounded-3xl capitalize tracking-wide font-semibold
    text-sm ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
