import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReasonForSparing from './ReasonForSparing';

describe('ReasonForSparing', () => {
  test('displays error message for too short reason', () => {
    const onChangeReasonMock = jest.fn();
    const { getByLabelText, getByText, queryByText } = render(
      <ReasonForSparing reason="" onChangeReason={onChangeReasonMock} />
    );
    const reasonTextArea = getByLabelText('Reason for sparing');
    fireEvent.change(reasonTextArea, { target: { value: 'too short' } });
    expect(getByText('Reason for sparing must be between 17 and 153 characters')).toBeInTheDocument();
    expect(onChangeReasonMock).toHaveBeenCalledTimes(1);
    expect(onChangeReasonMock).toHaveBeenCalledWith(expect.any(Object));

    fireEvent.change(reasonTextArea, { target: { value: 'This is a valid reason' } });
    expect(queryByText('Reason for sparing must be between 17 and 153 characters')).toBeNull();
  });

  test('displays error message for too long reason', () => {
    const onChangeReasonMock = jest.fn();
    const { getByLabelText, getByText } = render(
      <ReasonForSparing reason="" onChangeReason={onChangeReasonMock} />
    );
    const reasonTextArea = getByLabelText('Reason for sparing');
    fireEvent.change(reasonTextArea, { target: { value: 'a'.repeat(154) } });
    expect(getByText('Reason for sparing must be between 17 and 153 characters')).toBeInTheDocument();
    expect(onChangeReasonMock).toHaveBeenCalledTimes(1);
    expect(onChangeReasonMock).toHaveBeenCalledWith(expect.any(Object));
  });
});
