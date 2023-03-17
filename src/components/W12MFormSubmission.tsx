import React from 'react';

type W12MFormSubmissionProps = {
  speciesName: string;
  planetName: string;
  numBeings: number;
  reason: string;
  mathAnswer: string;
};

const W12MFormSubmission: React.FC<W12MFormSubmissionProps> = ({
  speciesName,
  planetName,
  numBeings,
  reason,
  mathAnswer,
}) => {
  return (
    <div>
      <h2>Your form submission:</h2>
      <p>Species Name: {speciesName}</p>
      <p>Planet Name: {planetName}</p>
      <p>Number of Beings: {numBeings}</p>
      <p>Reason for Sparing: {reason}</p>
      <p>Math Answer: {mathAnswer}</p>
    </div>
  );
};

export default W12MFormSubmission;
