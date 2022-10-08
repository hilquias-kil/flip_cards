import './Card.styles.scss';

import { useMediaQuery } from 'react-responsive';

import { ChevronRight } from '../../../assets/icons/ChevronRight';
import { truncateString } from '../../../utils/truncateString';
import { CardProps } from './interfaces';

export const Card = ({
  testId = 'card-id',
  image,
  tags,
  url,
  title,
  description,
  featured,
  ...props
}: CardProps) => {
  const splitTitle = title.split(':');
  const primaryTitle = splitTitle[1] ? splitTitle[1] : splitTitle[0];
  const secondaryTitle = splitTitle[0];

  const isMobile = useMediaQuery({
    query: '(max-device-width: 640px)',
  });

  return (
    <div data-testid={testId} className="card" {...props}>
      <div className="card__inner">
        <div className="card__front">
          {!!featured && <span className="card__flag">Featured</span>}
          <img src={image} className="card__image" alt={title} width={540} height={240} />
          <div className="card__text">
            <h2 className="card__title">{primaryTitle}</h2>
            <p className="card__description">
              {truncateString(description, isMobile ? 100 : 372)}
            </p>
          </div>
        </div>
        <div className="card__back">
          <img
            src={image}
            className="card__image flipped"
            alt={title}
            width={540}
            height={240}
          />
          <div className="card__text back">
            <h2 className="card__title">{secondaryTitle}</h2>
            <div className="card__tags">
              {tags.map((tag) => (
                <span className="card__tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <a href={url} className="card__link">
              <span>Learn more</span>
              <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
