import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValues });

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  // console.log(createProject);
  const { editProject, isEditing } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date().toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <div>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="عنوان پروژه"
          name="title"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "نوشتن عنوان ضروری است",
            minLength: {
              value: 10,
              message: "طول عنوان باید بیشتر از 10 کاراکتر باشد",
            },
          }}
        />
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 15,
              message: "حداقل 15 کاراکتر را وارد کنید",
            },
          }}
          errors={errors}
        />
        <TextField
          label="بودجه"
          name="budget"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "بودجه ضروری است",
          }}
          errors={errors}
        />
        <RHFSelect
          label="دسته بندی"
          required
          name="category"
          register={register}
          options={categories}
        />
        <div className="">
          <label className="mb-2 block text-secondary-700">تگ ها</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
        <DatePickerField label="ددلاین" date={date} setDate={setDate} />
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

export default CreateProjectForm;
