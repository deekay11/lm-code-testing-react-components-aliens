interface WhatIsTwoPlusTwoProps {
    whatIsTwoPlusTwo: string;
    onChangeWhatIsTwoPlusTwo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const WhatIsTwoPlusTwo: React.FC<WhatIsTwoPlusTwoProps> = ({ whatIsTwoPlusTwo, onChangeWhatIsTwoPlusTwo }) => {
    return (
      <div>
        <label htmlFor="whatIsTwoPlusTwo">What is 2 + 2?</label>
        <input type="text" id="whatIsTwoPlusTwo" value={whatIsTwoPlusTwo} onChange={onChangeWhatIsTwoPlusTwo} />
      </div>
    );
  };
  
  export default WhatIsTwoPlusTwo;
  