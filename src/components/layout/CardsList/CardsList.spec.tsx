import '@testing-library/jest-dom';

import { toHaveNoViolations } from 'jest-axe';
import { describe, expect, it, vi } from 'vitest';

// eslint-disable-next-line no-unused-vars
import { getCards } from '../../../api/getCards';
import {
  act,
  axe,
  render,
  screen,
  userEvent,
  waitFor,
  within,
} from '../../../utils/test-utils';
import { CardsList } from './CardsList';

expect.extend(toHaveNoViolations);

vi.mock('../../../api/getCards', () => {
  const getCards = vi.fn(() => {
    return Promise.resolve({
      cards: [
        {
          id: 'Nerium',
          tags: ['CMS Selection', 'Experience Design'],
          image:
            'http://herodigital.com/wp-content/uploads/2017/10/Hero_Nerium_HeroImage_2280x1000_v2_2.jpg',
          url: 'https://herodigital.com/',
          title: 'Nerium: Reimagining the digital CX for Nerium International',
          description:
            'As Nerium International repositioned its brand and elevated its skincare...',
          featured: 0,
        },
        {
          id: 'WesternDigital',
          tags: ['SEO'],
          image:
            'http://herodigital.com/wp-content/uploads/2017/01/work-landing-wd-1.jpg',
          url: 'https://herodigital.com/',
          title: 'Western Digital: The new Western Digital site quadruples conversions',
          description: 'As Western Digital was scaling back its investments.',
          featured: 1,
        },
      ],
    });
  });
  return { getCards };
});

describe('<CardsList />', () => {
  const testId = 'component-cards-list-id';

  it('should render the CardsList', async () => {
    const { container } = render(<CardsList testId={testId} />);

    const card = await waitFor(() => screen.getAllByTestId('card-id'));

    expect(card).toHaveLength(2);

    expect(
      screen.getByRole('heading', {
        name: /reimagining the digital cx for nerium international/i,
      }),
    ).toBeInTheDocument();

    const view = screen.getAllByTestId('card-id');

    expect(within(view[0]).getByText(/cms selection/i)).toBeInTheDocument();

    const acessibilityResults = await axe(container);
    expect(acessibilityResults).toHaveNoViolations();
  });

  it('should filter cards in the CardsList', async () => {
    render(<CardsList testId={testId} />);

    await waitFor(() => screen.getAllByTestId('card-id'));

    expect(screen.getAllByRole('button')).toHaveLength(3);

    act(() => {
      userEvent.click(
        screen.getByRole('button', {
          name: /seo/i,
        }),
      );
    });

    const cards = await waitFor(() => screen.getAllByTestId('card-id'));

    expect(cards).toHaveLength(1);
  });
});
