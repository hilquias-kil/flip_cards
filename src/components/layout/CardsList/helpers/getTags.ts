import { ICard } from '../interfaces';

export const getTags = (cards: ICard[]) => {
  const tags: string[] = [];
  cards.forEach((card) => {
    card.tags.forEach((tag) => {
      if (!tags.includes(tag)) tags.push(tag);
    });
  });

  return tags.sort();
};
