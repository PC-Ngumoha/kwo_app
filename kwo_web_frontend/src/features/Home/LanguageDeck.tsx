import type { JSX } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../../ui';
import { type LanguageDeckType } from './types';

function LanguageDeck({ deck }: { deck: LanguageDeckType }): JSX.Element {
  const progress = Math.ceil((deck.completed / deck.cards.length) * 100);
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
          <span className="italic tracking-wider">
            {deck.cards.length} cards
          </span>
          {/* <div className="h-1.5 w-1.5 mx-2 bg-gray-500 rounded-full" />
          <Badge content={deck.level} bold /> */}
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
          max={deck.cards.length}
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

export default LanguageDeck;
