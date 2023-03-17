import { render, fireEvent } from '@testing-library/react';
import WhatIsTwoPlusTwo from './WhatIsTwoPlusTwo';

describe('WhatIsTwoPlusTwo', () => {
  test('displays error message for incorrect answer', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText, getByText } = render(
      <WhatIsTwoPlusTwo whatIsTwoPlusTwo="" onChangeWhatIsTwoPlusTwo={onChangeMock} />
    );

    fireEvent.change(getByLabelText('What is 2 + 2?'), { target: { value: 'not4' } });
    expect(getByText('Incorrect answer, please select "4".')).toBeInTheDocument();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.anything());
  });

  test('does not display error message for correct answer', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText, queryByText } = render(
      <WhatIsTwoPlusTwo whatIsTwoPlusTwo="" onChangeWhatIsTwoPlusTwo={onChangeMock} />
    );

    fireEvent.change(getByLabelText('What is 2 + 2?'), { target: { value: '4' } });

    expect(queryByText('Incorrect answer, please select "4".')).toBeNull();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.anything());
  });

  test('does not display error message when valid answer is selected', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText, queryByText } = render(
      <WhatIsTwoPlusTwo whatIsTwoPlusTwo="" onChangeWhatIsTwoPlusTwo={onChangeMock} />
    );

    fireEvent.change(getByLabelText('What is 2 + 2?'), { target: { value: '4' } });

    expect(queryByText('Incorrect answer, please select "4".')).toBeNull();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.anything());
  });

  test('displays error message when "Not 4" is selected', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText, getByText } = render(
      <WhatIsTwoPlusTwo whatIsTwoPlusTwo="" onChangeWhatIsTwoPlusTwo={onChangeMock} />
    );

    fireEvent.change(getByLabelText('What is 2 + 2?'), { target: { value: 'Not 4' } });

    expect(getByText('Incorrect answer, please select "4".')).toBeInTheDocument();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.anything());
  });
});
