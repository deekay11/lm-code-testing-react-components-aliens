import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface ReasonForSparingProps {
  reason: string;
  onChangeReason: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reason, onChangeReason }) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const validateReason = (value: string): string | undefined => {
    if (value.length < 17 || value.length > 153) {
      return 'Reason for sparing must be between 17 and 153 characters';
    }
    return undefined;
  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    const errorMessage = validateReason(newValue);
    setErrorMessage(errorMessage);
    onChangeReason(event);
  };

  return (
    <>
      <label htmlFor='reason'>Reason for sparing</label>
      <textarea
        id='reason'
        value={reason}
        onChange={handleReasonChange}
      />
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </>
  );
};

export default ReasonForSparing;
