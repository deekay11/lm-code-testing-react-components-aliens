import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import ReasonForSparing from './ReasonForSparing';

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>('humans');
  const [planetName, setPlanetName] = useState<string>('Earth');
  const [numBeings, setNumBeings] = useState<number>(0);
  const [reason, setReason] = useState<string>('');
  const [mathAnswer, setMathAnswer] = useState<string>('');

  const handleSpeciesNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeciesName(e.target.value);
  };

  const handlePlanetNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanetName(e.target.value);
  };

  const handleNumBeingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumBeings(parseInt(e.target.value));
  };

  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.target.value);
  };

  const handleMathAnswerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMathAnswer(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      speciesName,
      planetName,
      numBeings,
      reason,
      mathAnswer,
    });
  };

  return (
    <section className='w12MForm'>
      <W12MHeader />
      <form onSubmit={handleSubmit}>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={handleSpeciesNameChange}
        />
        <PlanetName
          planetName={planetName}
          onChangePlanetName={handlePlanetNameChange}
        />
        <NumberOfBeings
          numBeings={numBeings}
          onChangeNumBeings={handleNumBeingsChange}
        />
        <ReasonForSparing
          reason={reason}
          onChangeReason={handleReasonChange}
        />
        <div className='w12MForm__field'>
          <label htmlFor='mathAnswer'>What is 2 + 2?</label>
          <select
            id='mathAnswer'
            value={mathAnswer}
            onChange={handleMathAnswerChange}
          >
            <option value='0'>Please select an answer</option>
            <option value='4'>4</option>
            <option value='22'>22</option>
            <option value='42'>42</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default W12MForm;
