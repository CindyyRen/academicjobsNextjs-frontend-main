"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

type FormData = {
  example: string;
};

const MyForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("example")} className="your-class-name" />
      <Input type="submit" />
    </form>
  );
};

export default MyForm;
