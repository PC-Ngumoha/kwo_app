import type { JSX } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { Link } from 'react-router';

function Card(): JSX.Element {
  return (
    <main>
      <nav className=" bg-white w-full h-fit flex flex-col mb-2">
        <div className=" p-4 flex justify-between items-center">
          <Link to="/" className="flex items-center font-bold tracking-wide">
            <FaChevronLeft className="text-xs mr-3" />
            Everyday Basics
          </Link>
          <span className="text-xs font-semibold tracking-wider">12/40</span>
        </div>
        <progress
          className="w-full h-1 [&::-webkit-progress-bar]:bg-gray-100
          [&::-webkit-progress-value]:bg-warm-orange"
          value={12}
          max={40}
        />
      </nav>
      <section>Card to be displayed here.</section>
    </main>
  );
}

export default Card;
