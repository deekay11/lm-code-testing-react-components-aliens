import { render, fireEvent } from '@testing-library/react';
import PlanetNameInput from './PlanetName';

describe('PlanetNameInput', () => {
  test('renders without crashing', () => {
    render(<PlanetNameInput planetName="" onChangePlanetName={() => { }} />);
  });

  test('displays no error message when planet name is valid', () => {
    const { getByLabelText, queryByText } = render(
      <PlanetNameInput planetName="Valid Planet Name" onChangePlanetName={() => { }} />
    );

    const input = getByLabelText(/planet name/i);
    fireEvent.change(input, { target: { value: 'Valid Planet Name' } });

    const errorMessage = queryByText(/planet name must be between 2 and 49 characters/i);
    expect(errorMessage).toBeNull();
  });

  test('displays an error message when planet name is too short', () => {
    const { getByLabelText, getByText } = render(
      <PlanetNameInput planetName="" onChangePlanetName={() => { }} />
    );

    const input = getByLabelText(/planet name/i);
    fireEvent.change(input, { target: { value: 'p' } });

    const errorMessage = getByText(/planet name must be between 2 and 49 characters/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays an error message when planet name is too long', () => {
    const { getByLabelText, getByText } = render(
      <PlanetNameInput planetName="" onChangePlanetName={() => { }} />
    );

    const input = getByLabelText(/planet name/i);
    fireEvent.change(input, {
      target: { value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    });

    const errorMessage = getByText(/planet name must be between 2 and 49 characters/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays an error message when planet name contains special characters', () => {
    const { getByLabelText, getByText } = render(
      <PlanetNameInput planetName="" onChangePlanetName={() => { }} />
    );

    const input = getByLabelText(/planet name/i);
    fireEvent.change(input, { target: { value: 'Mars!' } });

    const errorMessage = getByText(/planet name cannot contain special characters/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('calls onChangePlanetName prop with the new value', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <PlanetNameInput planetName="" onChangePlanetName={handleChange} />
    );

    const input = getByLabelText(/planet name/i);
    fireEvent.change(input, { target: { value: 'Mars' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
