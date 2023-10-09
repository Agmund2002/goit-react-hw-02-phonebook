export const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={evt => onChange(evt.target.value)}
    />
  );
};
