import type { JSX } from 'react';

function Navbar(): JSX.Element {
  return (
    <nav className="w-full h-16 p-2 border border-gray-200 flex">
      <div
        className="h-full md:w-[40%] lg:w-[30%] flex justify-between
        items-center"
      >
        <img src="/logo.svg" alt="Kwo's logo" className="h-full w-auto" />
        <ul
          className="tracking-wide w-[70%] hidden md:flex justify-around text-sm
          font-semibold"
        >
          <li className="hover:text-warm-orange duration-75 ease-in">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-warm-orange duration-75 ease-in">
            <a href="#">Decks</a>
          </li>
          <li className="hover:text-warm-orange duration-75 ease-in">
            <a href="#">Progress</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
