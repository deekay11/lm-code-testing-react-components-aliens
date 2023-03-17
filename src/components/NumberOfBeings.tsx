import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface NumberOfBeingsProps {
  numBeings: number;
  onChangeNumBeings: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numBeings,
  onChangeNumBeings,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const validateNumBeings = (value: string): string | undefined => {
    const num = parseInt(value);
    if (isNaN(num) || num < 1000000000) {
      return "Number of beings must be at least 1,000,000,000.";
    }
    return undefined;
  };

  return (
    <div>
      <label htmlFor="numBeings">Number of Beings:</label>
      <input
        id="numBeings"
        type="number"
        value={numBeings}
        onChange={(e) => {
          const errorMessage = validateNumBeings(e.target.value);
          setErrorMessage(errorMessage);
          onChangeNumBeings(e);
        }}
      />
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default NumberOfBeings;
