import type { JSX } from 'react';

function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full h-fit px-4 py-5 text-gray-500 flex flex-col md:flex-row justify-between text-sm
      items-center border-t border-t-gray-200 mt-1"
    >
      <span className="italic">
        &copy;{currentYear} Kwo Language learning. All rights reserved.
      </span>
      <span className="capitalize">
        <a href="#" className="mr-4">
          Help center
        </a>
        <a href="#" className="mr-4">
          Privacy policy
        </a>
        <a href="#" className="mr-4">
          Terms of service
        </a>
      </span>
    </footer>
  );
}

export default Footer;
