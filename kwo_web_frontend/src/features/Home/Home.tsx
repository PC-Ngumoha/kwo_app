import { useEffect, useState, type JSX } from 'react';
import Papa from 'papaparse';
import { Navbar, Banner, Footer } from '../../ui';
import type { LanguageDeckType, DataType } from './types';
import LanguageDeckGrid from './LanguageDeckGrid';

function Home(): JSX.Element {
  const IGBO_WORD_BANK_URL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTLoHkFlXkAZqmXL852R6TMqW7Ys027-537V3sNeOz0BC2YxARBvHRV_EZk-D65EdkRg8IqCPjI9uOC/pub?gid=0&single=true&output=csv';

  const [decks, setDecks] = useState<LanguageDeckType[]>([]);

  function transform(cards: DataType[]): LanguageDeckType[] {
    const decks: LanguageDeckType[] = [];

    cards.forEach((card) => {
      const index = decks.findIndex((deck) => deck.title === card.deck);

      const { deck: title, english, igbo } = card;

      if (index < 0) {
        decks.push({
          title,
          cards: [{ id: crypto.randomUUID(), english, igbo }],
          completed: 0,
        });
      } else {
        decks.at(index)?.cards.push({ id: crypto.randomUUID(), english, igbo });
      }
    });

    return decks;
  }

  useEffect(function () {
    async function fetchData() {
      const response = await fetch(IGBO_WORD_BANK_URL);
      const output = Papa.parse(await response.text(), { header: true });
      const cards: DataType[] = output.data as DataType[];

      const decks = transform(cards);

      console.log(decks);
      setDecks(decks);
    }

    fetchData();
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
