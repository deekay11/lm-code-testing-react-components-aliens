import ErrorMessage from './ErrorMessage';
import React, { useState } from 'react';
interface PlanetNameInputProps {
  planetName: string;
  onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetNameInput: React.FC<PlanetNameInputProps> = ({
  planetName,
  onChangePlanetName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const validatePlanetName = (value: string): string | undefined => {
    if (value.length < 2 || value.length > 49) {
      return "Planet name must be between 2 and 49 characters.";
    }
    if (/[^\d\w\s]/g.test(value)) {
      return "Planet name cannot contain special characters.";
    }
    return undefined; 
  };
  
  return (
    <div>
      <label htmlFor="planetName">Planet Name:</label>
      <input
        id="planetName"
        type="text"
        value={planetName}
        onChange={(e) => {
          const errorMessage = validatePlanetName(e.target.value);
          setErrorMessage(errorMessage);
          onChangePlanetName(e);
        }}
      />
       {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
  
    </div>
  );
};
export default PlanetNameInput;