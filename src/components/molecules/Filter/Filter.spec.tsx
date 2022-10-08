import '@testing-library/jest-dom';

import { toHaveNoViolations } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { axe, render, screen } from '../../../utils/test-utils';
import { Filter } from './Filter';

expect.extend(toHaveNoViolations);

describe('<Filter />', () => {
  const testId = 'component-filter-id';

  it('should render the Filter', async () => {
    const { container } = render(
      <Filter
        testId={testId}
        tags={['tag 1', 'tag 2', 'tag 3', 'tag 4']}
        setFilter={() => {}}
        removeFilter={() => {}}
        filter={['tag 2']}
      />,
    );
    expect(screen.getByText('tag 1')).toBeInTheDocument();

    const acessibilityResults = await axe(container);
    expect(acessibilityResults).toHaveNoViolations();
  });
});
