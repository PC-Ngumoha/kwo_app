import { useState, type JSX } from 'react';
import { FaChevronLeft } from 'react-icons/fa6';
import { CiCircleInfo, CiUndo, CiPlay1 } from 'react-icons/ci';
import { Link } from 'react-router';
import { Badge } from '../../ui';

type CardContentType = {
  front: string;
  back: string;
};

function Card({ content }: { content: CardContentType }): JSX.Element {
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    // Card Container
    <article
      className="relative w-[80%] md:w-[70%] lg:w-[60%]
        h-[50%] rounded-xl overflow-hidden"
      onClick={() => setCardFlipped((prev) => !prev)}
    >
      {/* Card body */}
      <div
        className={`h-full w-full transform-3d  text-4xl md:text-5xl
        font-bold border border-gray-100 shadow-sm
        italic font-fira-sans absolute transition-all duration-1000 ease-in
        ${!cardFlipped ? 'rotate-y-0' : 'rotate-y-180'}`}
      >
        {/* Front */}
        <div
          className="bg-white flex items-center justify-center
        w-full h-full absolute backface-hidden"
        >
          {content.front}
        </div>
        {/* Back */}
        <div
          className="bg-gray-100 flex items-center justify-center
        w-full h-full absolute rotate-y-180 backface-hidden"
        >
          {content.back}
        </div>
      </div>
    </article>
  );
}

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
        <Card content={{ front: 'hello', back: 'ndewo' }} />

        <div className="mt-4 flex">
          <button
            className="h-fit flex capitalize p-2 mr-3 items-center
          text-sm gap-2 text-gray-500"
          >
            <CiUndo className="text-lg text-navy-blue" />
            <span>replay audio</span>
            <Badge content="r" bold={false} />
          </button>

          <button
            className="h-fit flex capitalize p-2 mr-3 items-center
          text-sm gap-2 text-gray-500"
          >
            <CiPlay1 className="text-lg text-navy-blue" />
            <span>show example</span>
            <Badge content="h" bold={false} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Lesson;
