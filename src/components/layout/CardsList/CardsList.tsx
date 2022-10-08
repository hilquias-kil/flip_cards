import './CardsList.styles.scss';

import { useEffect, useState } from 'react';

import { Card } from '../../molecules/Card';
import { Filter } from '../../molecules/Filter';
import { CardsListProps, ICard, ICardList } from './interfaces';

const getTags = (cards: ICard[]) => {
  const tags: string[] = [];
  cards.forEach((card) => {
    card.tags.forEach((tag) => {
      if (!tags.includes(tag)) tags.push(tag);
    });
  });

  return tags.sort();
};

export const CardsList = ({ testId = 'cards-list-id', ...props }: CardsListProps) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [filter, setFilter] = useState<string[]>([]);

  const onFilter = (tag: string) => {
    const temp = [...filter];
    temp.push(tag);
    setFilter(temp);
  };

  const removeFilter = (tag: string) => {
    const temp = filter.filter((it) => it !== tag);
    setFilter(temp);
  };

  const filterCards = (cards: ICard[]) => {
    let temp = [...cards];
    filter.forEach((tag) => {
      temp = temp.filter((card) => card.tags.includes(tag));
    });
    return temp;
  };

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data: ICardList) => {
        setCards(data.cards);
        setTags(getTags(data.cards));
      });
  }, []);

  return (
    <div data-testid={testId} className="cards" {...props}>
      <div className="cards_filter">
        <Filter
          tags={tags}
          setFilter={(tag) => onFilter(tag)}
          filter={filter}
          removeFilter={(tag) => removeFilter(tag)}
        />
      </div>
      <div className="cards_list">
        {filterCards(cards).length ? (
          filterCards(cards).map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
              tags={card.tags}
              featured={card.featured}
              url={card.url}
            />
          ))
        ) : (
          <p>Lista vazia...</p>
        )}
      </div>
    </div>
  );
};
