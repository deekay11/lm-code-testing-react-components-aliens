interface ReasonForSparingProps {
  reason: string;
  onChangeReason: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({ reason, onChangeReason }) => {
  return (
    <div>
      <label htmlFor="reason">Reason for sparing:</label>
      <textarea id="reason" value={reason} onChange={onChangeReason} />
    </div>
  );
};

export default ReasonForSparing;
