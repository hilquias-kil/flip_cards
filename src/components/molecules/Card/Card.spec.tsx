import '@testing-library/jest-dom';

import { toHaveNoViolations } from 'jest-axe';
import { describe, expect, it } from 'vitest';

import { axe, render, screen } from '../../../utils/test-utils';
import { Card } from './Card'

expect.extend(toHaveNoViolations);

describe('<Card />', () => {
	const testId = 'component-card-id'

	it('should render the Card', async () => {
		const { container } = render(<Card testId={testId}>Test</Heading>);
		expect(screen.getByText('Test')).toBeInTheDocument();

		const acessibilityResults = await axe(container);
		expect(acessibilityResults).toHaveNoViolations();
	})
})
