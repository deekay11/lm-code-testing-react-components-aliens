import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const validateSpeciesName = (value: string): string | undefined => {
    if (value.length < 3 || value.length > 23) {
      return "Species name must be between 3 and 23 characters.";
    }
    if (/[0-9!@#$%^&*(),.?":{}|<>]/g.test(value)) {
      return "Species name cannot contain numbers or special characters.";
    }
    return undefined;
  };

  return (
    <>
      <label htmlFor='speciesName'>Species Name</label>
      <input
        id='speciesName'
        type='text'
        value={speciesName}
        onChange={(e) => {
          const errorMessage = validateSpeciesName(e.target.value);
          setErrorMessage(errorMessage);
          onChangeSpeciesName(e);
        }}
      />
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </>
  );
};

export default SpeciesName;
