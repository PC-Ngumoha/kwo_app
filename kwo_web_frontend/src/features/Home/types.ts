export type DataType = {
  deck: string;
  english: string;
  igbo: string;
};

export type CardType = {
  id: string;
  english: string;
  igbo: string;
};

export type LanguageDeckType = {
  title: string;
  cards: CardType[];
  completed: number;
  // level: 'beginner' | 'intermediate' | 'advanced';
};