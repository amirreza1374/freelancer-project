import React from "react";
import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-x-8">
          {options.map((option) => (
            <RadioInput
              key={option.value}
              label={option.label}
              value={option.value}
              id={option.id}
              name={name}
              register={register}
              watch={watch}
              validationSchema={validationSchema}
              errors={errors}
              // onChange={(e) => setRole(e.target.value)}
            />
          ))}
        </div>
        {errors && errors[name] && (
          <span className="text-error block text-sm mt-2 ">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </>
  );
}

export default RadioInputGroup;
