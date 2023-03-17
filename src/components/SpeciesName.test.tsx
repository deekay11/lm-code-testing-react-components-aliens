import { render, screen, fireEvent } from '@testing-library/react';
import SpeciesName from './SpeciesName';

describe('SpeciesName', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  
  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  test('renders the component', () => {
    render(
      <SpeciesName
        speciesName=''
        onChangeSpeciesName={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    expect(screen.getByLabelText('Species Name')).toBeInTheDocument();
  });

  test('displays an error message when the input is too short', () => {
    render(
      <SpeciesName
        speciesName=''
        onChangeSpeciesName={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    const input = screen.getByLabelText('Species Name');
    fireEvent.change(input, { target: { value: 'ab' } });

    expect(screen.getByText('Species name must be between 3 and 23 characters.')).toBeInTheDocument();
  });

  test('displays an error message when the input is too long', () => {
    render(
      <SpeciesName
        speciesName=''
        onChangeSpeciesName={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    const input = screen.getByLabelText('Species Name');
    fireEvent.change(input, { target: { value: 'abcdefghijklmnopqrstuvwxyz' } });

    expect(screen.getByText('Species name must be between 3 and 23 characters.')).toBeInTheDocument();
  });

  test('displays an error message when the input contains numbers', () => {
    render(
      <SpeciesName
        speciesName=''
        onChangeSpeciesName={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    const input = screen.getByLabelText('Species Name');
    fireEvent.change(input, { target: { value: 'Test123' } });

    expect(screen.getByText('Species name cannot contain numbers or special characters.')).toBeInTheDocument();
  });

  test('displays an error message when the input contains special characters', () => {
    render(
      <SpeciesName
        speciesName=''
        onChangeSpeciesName={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    const input = screen.getByLabelText('Species Name');
    fireEvent.change(input, { target: { value: '!@#$%^&*()' } });

    expect(screen.getByText('Species name cannot contain numbers or special characters.')).toBeInTheDocument();
  });

  test('does not display an error message when the input is valid', () => {
    render(
      <SpeciesName
        speciesName=''
        onChangeSpeciesName={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    const input = screen.getByLabelText('Species Name');
    fireEvent.change(input, { target: { value: 'ValidSpeciesName' } });

    expect(screen.queryByText('Species name must be between 3 and 23 characters.')).not.toBeInTheDocument();
    expect(screen.queryByText('Species name cannot contain numbers or special characters.')).not.toBeInTheDocument();
  });

  test('calls the onChangeSpeciesName prop when the input changes', () => {
    render(
      <SpeciesName
        speciesName=''
        onChangeSpeciesName={handleChange}
        handleSubmit={handleSubmit}
      />
    );

    const input = screen.getByLabelText('Species Name');
    fireEvent.change(input, { target: { value: 'ValidSpeciesName' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
