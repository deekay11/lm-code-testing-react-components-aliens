interface NumberOfBeingsProps {
    numBeings: number;
    onChangeNumBeings: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
    numBeings,
    onChangeNumBeings,
  }) => {
    return (
      <div>
        <label htmlFor="numBeings">Number of Beings:</label>
        <input
          id="numBeings"
          type="number"
          value={numBeings}
          onChange={onChangeNumBeings}
        />
      </div>
    );
  };
  
  export default NumberOfBeings;
  