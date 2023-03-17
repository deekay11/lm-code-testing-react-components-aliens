import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './SpeciesName';
import PlanetName from './PlanetName';
import NumberOfBeings from './NumberOfBeings';
import ReasonForSparing from './ReasonForSparing';
import W12MFormSubmission from './W12MFormSubmission';

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>('');
  const [planetName, setPlanetName] = useState<string>('');
  const [numBeings, setNumBeings] = useState<number>(0);
  const [reason, setReason] = useState<string>('');
  const [mathAnswer, setMathAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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
    setIsSubmitted(true);
    
  };

  return (
    <section className='w12MForm'>
      <W12MHeader />
      <form onSubmit={handleSubmit}>
        <SpeciesName
          speciesName={speciesName}
          onChangeSpeciesName={handleSpeciesNameChange}
          handleSubmit={handleSubmit}
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
            <option value='12'>12</option>
            <option value='22'>22</option>
          </select>
        </div>
        <button type='submit' name='submit'>Submit</button>
      </form>
      {isSubmitted && (
        <W12MFormSubmission
          speciesName={speciesName}
          planetName={planetName}
          numBeings={numBeings}
          reason={reason}
          mathAnswer={mathAnswer}
        />
      )}
    </section>
  );
};

export default W12MForm;
