import './Filter.styles.scss';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { ChevronRight } from '../../../assets/icons/ChevronRight';
import { FilterProps } from './interfaces';

export const Filter = ({
  testId = 'filter-id',
  tags,
  setFilter,
  removeFilter,
  filter,
  ...props
}: FilterProps) => {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)',
  });
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div data-testid={testId} className="filter" {...props}>
      {isMobile && (
        <div className="filter__select">
          {filter.length ? (
            filter.map((tag) => (
              <button
                key={tag}
                onClick={() => removeFilter(tag)}
                className="filter__tagSelected"
              >
                {tag} x
              </button>
            ))
          ) : (
            <span>Select...</span>
          )}
          <button
            className={`filter__selectButton ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <ChevronRight />
          </button>
        </div>
      )}
      <div className={`filter__list ${open ? 'open' : ''}`}>
        {tags
          .filter((tag) => (isMobile ? !filter.includes(tag) : tag))
          .map((tag) => (
            <button
              key={tag}
              className={`filter__button ${filter.includes(tag) ? 'selected' : ''}`}
              onClick={() => {
                setOpen(false);
                filter.includes(tag) ? removeFilter(tag) : setFilter(tag);
              }}
            >
              {tag}
            </button>
          ))}
      </div>
    </div>
  );
};
