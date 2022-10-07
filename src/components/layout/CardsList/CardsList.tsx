import './CardsList.styles.scss';

import { useEffect, useState } from 'react';

import { Card } from '../../molecules/Card';
import { CardsListProps, ICard, ICardList } from './interfaces';

export const CardsList = ({ testId = 'cards-list-id', ...props }: CardsListProps) => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: ICardList) => {
        setCards(data.cards);
      });
  }, []);

  return (
    <div data-testid={testId} className="CardsList" {...props}>
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
          tags={card.tags}
          featured={card.featured}
          url={card.url}
        />
      ))}
    </div>
  );
};
