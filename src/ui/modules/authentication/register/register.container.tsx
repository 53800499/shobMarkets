/** @format */

import React, { useState } from "react";
import RegisterView from "./register.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterFormFieldsType } from "@/types/forms";

export default function RegisterContainer() {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<RegisterFormFieldsType>();

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formdata) => {
    setisLoading(true);
    console.log("Form submitted:", formdata);
  };

  const form = {
    errors,
    register,
    handleSubmit,
    onSubmit,
    isLoading
  };

  console.log("Form data in RegisterContainer:", form); // Vérifiez ici.

  return (
    <RegisterView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
}
