import { useState, type JSX } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { CiCircleInfo, CiUndo, CiPlay1 } from 'react-icons/ci';
import { Link } from 'react-router';
import { Badge, Button } from '../../ui';

type CardContentType = {
  id: number;
  front: string;
  back: string;
};

const contents: CardContentType[] = [
  { id: 1, front: 'hello', back: 'ndewo' },
  { id: 2, front: 'thank you', back: 'daalụ' },
  { id: 3, front: 'good morning', back: 'ụtụtụ ọma' },
  { id: 4, front: 'good afternoon', back: 'ehihie ọma' },
  { id: 5, front: 'good evening', back: 'mgbede ọma' },
  { id: 6, front: 'yes', back: 'ee' },
  { id: 7, front: 'no', back: 'mba' },
  { id: 8, front: 'please', back: 'biko' },
  { id: 9, front: 'sorry', back: 'ndo' },
  { id: 10, front: 'welcome', back: 'nnoo' },
  { id: 11, front: 'water', back: 'mmiri' },
  { id: 12, front: 'food', back: 'nri' },
  { id: 13, front: 'house', back: 'ụlọ' },
  { id: 14, front: 'family', back: 'ezinụlọ' },
  { id: 15, front: 'friend', back: 'enyi' },
  { id: 16, front: 'child', back: 'nwa' },
  { id: 17, front: 'man', back: 'nwoke' },
  { id: 18, front: 'woman', back: 'nwanyị' },
  { id: 19, front: 'love', back: 'ịhụnanya' },
];

function Card({ content }: { content: CardContentType }): JSX.Element {
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    // Card Container
    <article
      className="relative w-[80%] md:w-[60%] lg:w-[50%] h-[50%] overflow-hidden z-10
      rounded-xl"
      onClick={() => setCardFlipped((prev) => !prev)}
    >
      {/* Card body */}
      <div
        className={`h-full w-full transform-3d  text-4xl md:text-5xl
        font-bold shadow-md border border-gray-200 rounded-xl
        italic font-fira-sans absolute transition-all duration-1000 ease-in
        ${!cardFlipped ? 'rotate-y-0' : 'rotate-y-180'}`}
      >
        {/* Front */}
        <div
          className="bg-white flex items-center justify-center
        w-full h-full absolute backface-hidden rounded-xl"
        >
          {content.front}
        </div>
        {/* Back */}
        <div
          className="bg-gray-100 flex items-center justify-center
        w-full h-full absolute rotate-y-180 backface-hidden rounded-xl"
        >
          {content.back}
        </div>
      </div>
    </article>
  );
}

function Lesson(): JSX.Element {
  const [selectedCard, setSelectedCard] = useState(0);

  function handlePrevCard() {
    setSelectedCard((state) => (state > 0 ? (state -= 1) : state));
  }

  function handleNextCard() {
    setSelectedCard((state) =>
      state < contents.length - 1 ? (state += 1) : state
    );
  }

  return (
    <main className="relative h-screen w-full flex flex-col">
      <nav className=" bg-white w-full h-fit flex flex-col">
        <div className=" p-4 flex justify-between items-center">
          <Link to="/" className="flex items-center font-bold tracking-wide">
            <FaChevronLeft className="text-xs mr-3" />
            Everyday Basics
          </Link>
          <span className="text-xs font-semibold tracking-wider">
            {selectedCard + 1}/{contents.length}
          </span>
        </div>
        <progress
          className="w-full h-1 [&::-webkit-progress-bar]:bg-gray-100
          [&::-webkit-progress-value]:bg-warm-orange"
          value={selectedCard + 1}
          max={contents.length}
        />
      </nav>
      <section className="flex-1 w-full flex flex-col justify-center items-center">
        <p
          className="flex items-center text-sm text-gray-500
        tracking-tightest italic mb-4 gap-1"
        >
          <CiCircleInfo className="text-lg text-navy-blue" />
          Tip: Flip (click) the card to see the back.
        </p>

        {/* Flash card */}

        <Card
          content={contents[selectedCard]}
          key={contents[selectedCard].id}
        />

        <div className="mt-4 flex gap-3">
          <p
            className="h-fit flex capitalize p-2 items-center
          text-sm gap-2 text-gray-500"
          >
            <CiUndo className="text-lg text-navy-blue" />
            <span>replay audio</span>
            <Badge content="r" bold={false} />
          </p>

          <p
            className="h-fit flex capitalize p-2 items-center
          text-sm gap-2 text-gray-500"
          >
            <CiPlay1 className="text-lg text-navy-blue" />
            <span>show example</span>
            <Badge content="h" bold={false} />
          </p>
        </div>

        {/* Controls */}
        <div className="md:absolute h-fit md:w-full flex justify-between gap-2 md:gap-0 p-2">
          {/* <button
            onClick={handlePrevCard}
            className="py-3 px-6 my-3 md:w-[10%] bg-gray-300 rounded-3xl
            capitalize tracking-wide font-semibold text-sm flex
            items-center justify-center gap-2"
          >
            <FaChevronLeft />
            Back
          </button> */}
          <Button
            onClick={handlePrevCard}
            className="md:w-[10%] bg-gray-300 flex items-center justify-center gap-2"
          >
            <FaChevronLeft />
            Back
          </Button>

          <Button
            onClick={handleNextCard}
            className="md:w-[10%] bg-warm-orange  flex
            items-center justify-center gap-2"
          >
            Next
            <FaChevronRight />
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Lesson;
