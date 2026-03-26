import type { JSX } from 'react';

function Badge({
  content,
  bold,
}: {
  content: string;
  bold: boolean;
}): JSX.Element {
  return (
    <span
      className={` py-1 px-2 w-fit bg-gray-200 capitalize
                tracking-tight text-[11px] rounded-2xl
                flex items-center
                ${bold ? 'text-navy-blue font-semibold' : 'text-gray-500'}`}
    >
      {content}
    </span>
  );
}

export default Badge;
