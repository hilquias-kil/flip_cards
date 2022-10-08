import '@testing-library/jest-dom';

import { toHaveNoViolations } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { axe, render, screen } from '../../../utils/test-utils';
import { Filter } from './Filter'

expect.extend(toHaveNoViolations);

describe('<Filter />', () => {
	const testId = 'component-filter-id'

	it('should render the Filter', async () => {
		const { container } = render(<Filter testId={testId}>Test</Heading>);
		expect(screen.getByText('Test')).toBeInTheDocument();

		const acessibilityResults = await axe(container);
		expect(acessibilityResults).toHaveNoViolations();
	})
})
