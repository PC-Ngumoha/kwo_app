import { useEffect, type JSX } from 'react';
import { Navbar, Banner, Footer, Badge, Button } from '../../ui';
import { useNavigate } from 'react-router';

type LanguageDeckType = {
  title: string;
  cards: number;
  completed: number;
  level: 'beginner' | 'intermediate' | 'advanced';
};

const decks: LanguageDeckType[] = [
  {
    title: 'Everyday basics',
    cards: 30,
    completed: 20,
    level: 'beginner',
  },
  {
    title: 'Bible essentials',
    cards: 100,
    completed: 20,
    level: 'intermediate',
  },
  {
    title: 'Kitchen essentials',
    cards: 30,
    completed: 20,
    level: 'beginner',
  },
  {
    title: 'Romance & Love',
    cards: 50,
    completed: 10,
    level: 'advanced',
  },
  {
    title: 'Social interaction',
    cards: 72,
    completed: 40,
    level: 'intermediate',
  },
  {
    title: 'Office & work',
    cards: 56,
    completed: 20,
    level: 'intermediate',
  },
];

function LanguageDeck({ deck }: { deck: LanguageDeckType }): JSX.Element {
  const progress = Math.ceil((deck.completed / deck.cards) * 100);
  const navigate = useNavigate();

  return (
    <div
      className="bg-white border border-gray-100 p-4
          flex flex-col items-start shadow rounded-xl"
    >
      <div className="mb-2">
        <h2
          className="text-xl capitalize text-navy-blue tracking-wide
              font-semibold my-2"
        >
          {deck.title}
        </h2>
        <div className="text-xs md:text-sm text-gray-500 flex items-center">
          <span className="italic tracking-wider">{deck.cards} cards</span>
          <div className="h-1.5 w-1.5 mx-2 bg-gray-500 rounded-full" />
          <Badge content={deck.level} bold />
        </div>
      </div>
      <div className="my-3 w-full flex flex-col">
        <div className="w-full flex justify-between items-center">
          <span className="capitalize tracking-wide text-gray-600 text-sm">
            completion
          </span>
          <span
            className=" text-sm italic tracking-wide
              text-soft-green font-semibold"
          >
            {progress}%
          </span>
        </div>
        <progress
          value={deck.completed}
          max={deck.cards}
          className="my-2 w-full h-2 rounded-full overflow-hidden
        [&::-webkit-progress-bar]:bg-orange-100 [&::-webkit-progress-value]:bg-warm-orange"
        />
      </div>
      <Button
        className="my-3 bg-warm-orange self-end"
        onClick={() => navigate('/lesson')}
      >
        continue
      </Button>
    </div>
  );
}

function LanguageDeckGrid({
  decks,
}: {
  decks: LanguageDeckType[];
}): JSX.Element {
  return (
    <section
      className="my-4 flex flex-col md:grid grid-cols-2 lg:grid-cols-3
      gap-2 p-2"
    >
      {decks.map((deck, idx) => (
        <LanguageDeck key={idx} deck={deck} />
      ))}
    </section>
  );
}

function Home(): JSX.Element {
  const IGBO_WORD_BANK_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTLoHkFlXkAZqmXL852R6TMqW7Ys027-537V3sNeOz0BC2YxARBvHRV_EZk-D65EdkRg8IqCPjI9uOC/pub?gid=0&single=true&output=csv';

  useEffect(function () {
    async function fetchWords() {
      const response = await fetch(IGBO_WORD_BANK_URL);
      // TODO: Convert from CSV to JSON.
      const data = await response.text();

      console.log(data);
    }

    fetchWords();
  }, []);

  return (
    <>
      <Navbar />
      <main className="text-navy-blue px-2">
        {/* Banner */}
        <Banner
          title="card decks"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        {/* Grid of card decks */}
        <LanguageDeckGrid decks={decks} />
        <section
          className="w-full h-fit py-8 px-4 flex flex-col items-center bg-white
        border-t border-t-gray-200"
        >
          <span
            className="inline-block mb-2 tracking-wide font-light
          text-gray-500"
          >
            Can't find what you're looking for ?
          </span>
          <a
            href="#"
            role="button"
            className="block py-2 px-3 border border-gray-100 text-sm
          font-semibold tracking-tight"
          >
            {' '}
            Request a new language deck{' '}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
