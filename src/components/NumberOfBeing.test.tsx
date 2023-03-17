import { render, fireEvent } from '@testing-library/react';
import NumberOfBeings from './NumberOfBeings';

describe('NumberOfBeings', () => {
  test('renders input with correct label', () => {
    const { getByLabelText } = render(
      <NumberOfBeings numBeings={0} onChangeNumBeings={() => { }} />
    );
    const inputElement = getByLabelText(/Number of Beings:/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('input field accepts user input', () => {
    const handleChangeNumBeings = jest.fn();
    const { getByLabelText } = render(
      <NumberOfBeings numBeings={0} onChangeNumBeings={handleChangeNumBeings} />
    );
    const inputElement = getByLabelText(/Number of Beings:/i);
    fireEvent.change(inputElement, { target: { value: '1000000000' } });
    expect(handleChangeNumBeings).toHaveBeenCalled();
  });

  test('displays error message for input less than 1,000,000,000', () => {
    const handleChangeNumBeings = jest.fn();
    const { getByText, getByLabelText } = render(
      <NumberOfBeings numBeings={0} onChangeNumBeings={handleChangeNumBeings} />
    );
    const inputElement = getByLabelText(/Number of Beings:/i);
    fireEvent.change(inputElement, { target: { value: '999999999' } });
    expect(getByText(/Number of beings must be at least 1,000,000,000/i)).toBeInTheDocument();
  });

  test('does not display error message for input greater than or equal to 1,000,000,000', () => {
    const handleChangeNumBeings = jest.fn();
    const { queryByText, getByLabelText } = render(
      <NumberOfBeings numBeings={0} onChangeNumBeings={handleChangeNumBeings} />
    );
    const inputElement = getByLabelText(/Number of Beings:/i);
    fireEvent.change(inputElement, { target: { value: '1000000000' } });
    expect(queryByText(/Number of beings must be at least 1,000,000,000/i)).not.toBeInTheDocument();
  });

  test('displays error message for non-numeric input', () => {
    const { getByLabelText, getByText } = render(
      <NumberOfBeings numBeings={0} onChangeNumBeings={() => { }} />
    );
    const inputElement = getByLabelText(/Number of Beings:/i);
    fireEvent.change(inputElement, { target: { value: 'abc' } });
    expect(getByText(/Number of beings must be at least 1,000,000,000\./i)).toBeInTheDocument();
  });


  test('does not display error message for numeric input', () => {
    const handleChangeNumBeings = jest.fn();
    const { queryByText, getByLabelText } = render(
      <NumberOfBeings numBeings={0} onChangeNumBeings={handleChangeNumBeings} />
    );
    const inputElement = getByLabelText(/Number of Beings:/i);
    fireEvent.change(inputElement, { target: { value: '123' } });
    expect(queryByText(/Number of beings must contain only numbers/i)).not.toBeInTheDocument();
  });
});