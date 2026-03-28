import { useState, type JSX } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { CiCircleInfo, CiUndo, CiPlay1 } from 'react-icons/ci';
import { Link } from 'react-router';
import { Badge } from '../../ui';

type CardContentType = {
  front: string;
  back: string;
};

const contents: CardContentType[] = [
  { front: 'hello', back: 'ndewo' },
  { front: 'thank you', back: 'daalụ' },
  { front: 'good morning', back: 'ụtụtụ ọma' },
  { front: 'good afternoon', back: 'ehihie ọma' },
  { front: 'good evening', back: 'mgbede ọma' },
  { front: 'yes', back: 'ee' },
  { front: 'no', back: 'mba' },
  { front: 'please', back: 'biko' },
  { front: 'sorry', back: 'ndo' },
  { front: 'welcome', back: 'nnoo' },
  { front: 'water', back: 'mmiri' },
  { front: 'food', back: 'nri' },
  { front: 'house', back: 'ụlọ' },
  { front: 'family', back: 'ezinụlọ' },
  { front: 'friend', back: 'enyi' },
  { front: 'child', back: 'nwa' },
  { front: 'man', back: 'nwoke' },
  { front: 'woman', back: 'nwanyị' },
  { front: 'love', back: 'ịhụnanya' },
  { front: 'peace', back: 'udo' },
  { front: 'work', back: 'ọrụ' },
  { front: 'money', back: 'ego' },
  { front: 'book', back: 'akwụkwọ' },
  { front: 'school', back: 'ụlọ akwụkwọ' },
  { front: 'teacher', back: 'onye nkuzi' },
  { front: 'student', back: 'nwata akwụkwọ' },
  { front: 'road', back: 'ụzọ' },
  { front: 'market', back: 'ahịa' },
  { front: 'sun', back: 'anyanwụ' },
  { front: 'moon', back: 'ọnwa' },
  { front: 'day', back: 'ụbọchị' },
  { front: 'night', back: 'abalị' },
  { front: 'time', back: 'oge' },
  { front: 'name', back: 'aha' },
  { front: 'who', back: 'onye' },
  { front: 'what', back: 'gịnị' },
  { front: 'where', back: 'ebe' },
  { front: 'when', back: 'mgbe' },
  { front: 'why', back: 'gịnị mere' },
  { front: 'how', back: 'kedụ' },
];

function Card({ content }: { content: CardContentType }): JSX.Element {
  const [cardFlipped, setCardFlipped] = useState(false);

  return (
    // Card Container
    <article
      className="relative w-[80%] md:w-[60%] lg:w-[50%] h-[50%] rounded-xl overflow-hidden"
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
  const [selectedCard, setSelectedCard] = useState(0);

  function handlePrevCard() {
    setSelectedCard((state) => (state > 0 ? (state -= 1) : state));
  }

  function handleNextCard() {
    setSelectedCard((state) =>
      state < contents.length - 1 ? (state += 1) : state
    );
    console.log(selectedCard);
  }

  return (
    <main className="relative h-screen w-full flex flex-col">
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
        <p
          className="flex items-center text-sm text-gray-500
        tracking-tight italic mb-4 gap-1"
        >
          <CiCircleInfo className="text-lg text-navy-blue" />
          Tip: Flip (click) the card to see the back.
        </p>

        {/* Flash card */}

        <Card content={contents[selectedCard]} />

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

        <div className="absolute h-fit w-full hidden md:flex justify-between p-2">
          <button
            onClick={handlePrevCard}
            className="py-3 px-6 my-3 w-[10%] bg-gray-300 rounded-3xl
            capitalize tracking-wide font-semibold text-sm self-end flex
            items-center justify-center gap-2"
          >
            <FaChevronLeft />
            Back
          </button>

          <button
            onClick={handleNextCard}
            className="py-3 px-6 my-3 w-[10%] bg-warm-orange rounded-3xl
            capitalize tracking-wide font-semibold text-sm self-end flex
            items-center justify-center gap-2"
          >
            Next
            <FaChevronRight />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Lesson;
