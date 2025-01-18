import { Control, FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

export type FormsType = {
  errors: FieldErrors<any>; // Accepter les erreurs générées par react-hook-form
  register: UseFormRegister<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  onSubmit: (data: any) => void;
  isLoading: boolean;
};

export interface RegisterFormFieldsType {
    email: string;
    password: string;
    how_did_hear: string;
}
export interface LoginFormFieldsType {
    email: string;
    password: string;
}
export interface ForgetFormFieldsType {
    email: string;
    password: string;
}
