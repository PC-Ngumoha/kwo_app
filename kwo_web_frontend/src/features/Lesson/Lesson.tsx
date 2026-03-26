import type { JSX } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { CiCircleInfo, CiUndo, CiPlay1 } from 'react-icons/ci';
import { Link } from 'react-router';
import { Badge } from '../../ui';

function Lesson(): JSX.Element {
  return (
    <main className="h-screen w-full flex flex-col">
      <nav className=" bg-white w-full h-fit flex flex-col">
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
      <section className="flex-1 w-full flex flex-col justify-center items-center">
        <div
          className="flex items-center text-sm text-gray-500
        tracking-tight italic mb-4 gap-1"
        >
          <CiCircleInfo className="text-lg text-navy-blue" />
          <span>Tip: Flip (click) the card to see the back.</span>
        </div>

        {/* Flash card */}
        <article
          className="bg-white border border-gray-100 w-[80%] md:w-[70%] lg:w-[60%]
        h-[50%] shadow-sm rounded-xl flex items-center justify-center"
        >
          <span
            className="text-4xl md:text-5xl
          font-bold italic font-fira-sans"
          >
            Hello
          </span>
        </article>

        <div className="mt-4 flex">
          <button
            className="h-fit flex capitalize p-2 mr-3 items-center
          text-sm gap-2 text-gray-500"
          >
            <CiUndo />
            <span>replay audio</span>
            <Badge content="r" bold={false} />
          </button>

          <button
            className="h-fit flex capitalize p-2 mr-3 items-center
          text-sm gap-2 text-gray-500"
          >
            <CiPlay1 />
            <span>show example</span>
            <Badge content="h" bold={false} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Lesson;
