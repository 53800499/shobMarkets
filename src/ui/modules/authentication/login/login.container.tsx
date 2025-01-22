import React, { useState } from 'react'
import LoginView from './login.view'
import { FormsType, LoginFormFieldsType } from '@/types/forms';
import { SubmitHandler, useForm } from 'react-hook-form';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  form: FormsType<LoginFormFieldsType>; // Le type du formulaire est défini ici
}
export default function RegisterContainer() {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm<LoginFormFieldsType>();

  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formdata) => {
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
    <LoginView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
}
