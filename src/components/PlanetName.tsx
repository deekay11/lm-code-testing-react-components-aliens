interface PlanetNameInputProps {
  planetName: string;
  onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetNameInput: React.FC<PlanetNameInputProps> = ({
  planetName,
  onChangePlanetName,
}) => {
  return (
    <div>
      <label htmlFor="planetName">Planet Name:</label>
      <input
        id="planetName"
        type="text"
        value={planetName}
        onChange={onChangePlanetName}
      />
    </div>
  );
};
export default PlanetNameInput;