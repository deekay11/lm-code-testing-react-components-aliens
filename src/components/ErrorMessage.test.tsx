import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage component', () => {
  test('renders with error message', () => {
    const errorMessage = 'An error occurred';
    const { getByText } = render(<ErrorMessage errorMessage={errorMessage} />);
    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  test('does not render without error message', () => {
    const { queryByText } = render(<ErrorMessage errorMessage={undefined} />);
    expect(queryByText('An error occurred')).not.toBeInTheDocument();
  });
});
