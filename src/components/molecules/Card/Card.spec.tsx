import '@testing-library/jest-dom';

import { toHaveNoViolations } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { axe, render, screen } from '../../../utils/test-utils';
import { Card } from './Card';

expect.extend(toHaveNoViolations);

describe('<Card />', () => {
  const testId = 'component-card-id';

  it('should render the Card', async () => {
    const { container } = render(
      <Card
        testId={testId}
        title="title1 : title2"
        description="description"
        image="image"
        tags={[]}
        url=""
        featured={1}
      />,
    );
    expect(screen.getByText('title1')).toBeInTheDocument();
    expect(screen.getByText('description')).toBeInTheDocument();

    const acessibilityResults = await axe(container);
    expect(acessibilityResults).toHaveNoViolations();
  });
});
