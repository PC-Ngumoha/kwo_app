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

type CardType = {
  title: string;
  cards: number;
  completed: number;
  level: 'beginner' | 'intermediate' | 'advanced';
};

const cards: CardType[] = [
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

function App() {
  return (
    <main className="text-navy-blue">
      <Navbar />
      {/* Banner */}
      <div className="p-6 bg-gray-100">
        <h1
          className="text-3xl md:text-4xl lg:text-6xl capitalize tracking-wider mb-2
        font-bold text-navy-blue"
        >
          Card Deck
        </h1>
        <p className="text-xs md:text-sm tracking-wide text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* Deck of Cards */}
      <section
        className="my-4 flex flex-col md:grid grid-cols-2 lg:grid-cols-3
      gap-2 p-2"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 p-4
          flex flex-col items-start shadow rounded-xl"
          >
            <div className="mb-2">
              <h2
                className="text-xl capitalize text-navy-blue tracking-wide
              font-semibold my-2"
              >
                {card.title}
              </h2>
              <div className="text-xs md:text-sm text-gray-500 flex items-center">
                <span className="italic tracking-wider">
                  {card.cards} cards
                </span>
                <div className="h-1.5 w-1.5 mx-2 bg-gray-500 rounded-full" />
                <span
                  className="py-1 px-2 inline-block bg-gray-200 capitalize
                tracking-wide text-[11px] rounded-2xl text-navy-blue font-semibold"
                >
                  {card.level}
                </span>
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
                  {Math.ceil((card.completed / card.cards) * 100)}%
                </span>
              </div>
              <progress
                value={card.completed}
                max={card.cards}
                className="my-2 w-full h-2 rounded-full overflow-hidden
        [&::-webkit-progress-bar]:bg-orange-100 [&::-webkit-progress-value]:bg-warm-orange"
              />
            </div>
            <button
              className="py-3 px-6 my-3 bg-warm-orange rounded-3xl
            capitalize tracking-wide font-semibold text-sm self-end"
            >
              continue
            </button>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}

export default App;
