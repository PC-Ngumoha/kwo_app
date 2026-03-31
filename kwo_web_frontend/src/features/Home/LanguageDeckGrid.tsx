import type { JSX } from 'react';
import { type LanguageDeckType } from './types';
import LanguageDeck from './LanguageDeck';

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

export default LanguageDeckGrid;
