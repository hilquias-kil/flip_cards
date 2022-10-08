import './CardsList.styles.scss';

import { useEffect, useState } from 'react';

import { getCards } from '../../../api/getCards';
import { Card } from '../../molecules/Card';
import { Filter } from '../../molecules/Filter';
import { getTags } from './helpers/getTags';
import { CardsListProps, ICard } from './interfaces';

export const CardsList = ({ testId = 'cards-list-id', ...props }: CardsListProps) => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [filter, setFilter] = useState<string[]>([]);

  const addFilter = (tag: string) => {
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
    let mounted = true;
    const fetchData = async () => {
      const data = await getCards();
      const cards = data.cards;
      if (mounted) {
        setCards(cards);
        setTags(getTags(cards));
      }
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div data-testid={testId} className="cards" {...props}>
      <div className="cards_filter">
        <Filter
          tags={tags}
          setFilter={(tag) => addFilter(tag)}
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
