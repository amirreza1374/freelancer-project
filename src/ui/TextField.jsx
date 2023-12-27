function TextField({ label, name, value, onChange }) {
  return (
    <div className="">
      <label className="mb-2 block" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="textField__input"
        type="text"
        name={name}
        id={name}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
