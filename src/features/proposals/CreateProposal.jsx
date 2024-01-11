import React from "react";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data) => {
    createProposal({ ...data, projectId }, { onSuccess: () => onClose() });
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "نوشتن توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "طول توضیحات باید بیشتر از 10 کاراکتر باشد",
            },
          }}
        />
        <TextField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "تعیین قیمت ضروری است",
          }}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "تعیین مدت زمان ضروری است",
          }}
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
