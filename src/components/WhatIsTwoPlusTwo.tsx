import ErrorMessage from './ErrorMessage';
import React, { useState } from 'react';

interface WhatIsTwoPlusTwoProps {
  whatIsTwoPlusTwo: string;
  onChangeWhatIsTwoPlusTwo: (e: React.ChangeEvent<HTMLSelectElement>) => any;
}

const WhatIsTwoPlusTwo: React.FC<WhatIsTwoPlusTwoProps> = ({
  whatIsTwoPlusTwo,
  onChangeWhatIsTwoPlusTwo,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const validateAnswer = (value: string): string | undefined => {
    if (value !== '4') {
      return 'Incorrect answer, please select "4".';
    }
    return undefined;
  };

  return (
    <div>
      <label htmlFor="whatIsTwoPlusTwo">What is 2 + 2?</label>
      <select
        id="whatIsTwoPlusTwo"
        value={whatIsTwoPlusTwo}
        onChange={(e) => {
          const errorMessage = validateAnswer(e.target.value);
          setErrorMessage(errorMessage);
          onChangeWhatIsTwoPlusTwo(e);
        }}
      >
        <option value="">Select an answer</option>
        <option value="4">4</option>
        <option value="not4">Not 4</option>
      </select>
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default WhatIsTwoPlusTwo;
