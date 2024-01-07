function RadioInput({
  label,
  value,
  register,
  name,
  id,
  checked,
  validationSchema,
  errors,
  watch,
}) {
  return (
    <div>
      <div className="flex items-center gap-x-2 text-secondary-600">
        <input
          className="cursor-pointer size-4"
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={watch(name) === value}
          {...register(name, validationSchema)}
        />
        <label htmlFor={id}>{label}</label>
        
      </div>
    </div>
  );
}

export default RadioInput;
