export interface CardsListProps {
  testId?: string;
}

export interface ICardList {
  cards: ICard[];
}

export interface ICard {
  id: string;
  tags: string[];
  image: string;
  url: string;
  title: string;
  description: string;
  featured: number;
}
