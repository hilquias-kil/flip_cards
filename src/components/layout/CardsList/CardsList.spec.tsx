import '@testing-library/jest-dom';

import { toHaveNoViolations } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { axe, render, screen } from '../../../utils/test-utils';
import { CardsList } from './CardsList'

expect.extend(toHaveNoViolations);

describe('<CardsList />', () => {
	const testId = 'component-cards-list-id'

	it('should render the CardsList', async () => {
		const { container } = render(<CardsList testId={testId}>Test</Heading>);
		expect(screen.getByText('Test')).toBeInTheDocument();

		const acessibilityResults = await axe(container);
		expect(acessibilityResults).toHaveNoViolations();
	})
})
