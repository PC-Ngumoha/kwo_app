import type { JSX } from 'react';

function Banner({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}): JSX.Element {
  return (
    <div className="p-6 bg-gray-100">
      <h1
        className="text-3xl md:text-4xl lg:text-6xl capitalize tracking-wider mb-2
        font-bold text-navy-blue"
      >
        {title}
      </h1>
      <p className="text-xs md:text-sm tracking-wide text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}

export default Banner;
