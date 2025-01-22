import React, { useState } from 'react'
import ForgetPasswordView from './forget-password.view'
import { ForgetFormFieldsType, FormsType } from '@/types/forms';
import { SubmitHandler, useForm } from 'react-hook-form';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
    form: FormsType<ForgetFormFieldsType>; // Le type du formulaire est défini ici
  
}
export default function RegisterContainer() {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<ForgetFormFieldsType>();

  const onSubmit: SubmitHandler<ForgetFormFieldsType> = async (formdata) => {
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
    <ForgetPasswordView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
}
