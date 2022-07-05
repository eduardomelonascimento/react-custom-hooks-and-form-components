export default function Select({ options, value, setValue, _default, ...props }) {
  return (
    <>
      <select
        value={value}
        className="capitalize"
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled>
          {_default || "Selecione *"}
        </option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}