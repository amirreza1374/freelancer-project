function RadioInput({ label, value, onChange, name, id, checked }) {
  return (
    <div>
      <div className="flex items-center gap-x-2 text-secondary-600">
        <input
          className="cursor-pointer size-4"
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}

export default RadioInput;
