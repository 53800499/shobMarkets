import React from "react";
import Container from "@/ui/components/container/container";
import Image from "next/image";
import Box from "@/ui/designSystem/box/box";
import Typography from "@/ui/designSystem/typography/typography";
import Link from "next/link";
import RegisterForm from "./register.form";
import { FormsType, RegisterFormFieldsType } from "@/types/forms";

interface Props {
  form: FormsType<RegisterFormFieldsType>; // Le type du formulaire est défini ici
}

export default function RegisterView({ form }: Props) {
  if (!form) {
    console.error("Form is undefined in RegisterView.");
    return <div>Error: Form is not defined</div>;
  }

  return (
    <Container className="grid grid-cols-2 gap-20 mb-32 ">
      <div className="flex items-center ">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/svg/globe.svg"
            alt="sikirou"
            className="object-center rounded objet-cover "
          />
        </div>
      </div>
      <div className="flex items-center ">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Inscription
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption4" component="span" theme="gray">
                Tu a déjà un compte
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion">Connexion</Link>
              </Typography>
            </div>
          </div>
          <div>
            <RegisterForm form={form} />
          </div>
        </Box>
      </div>
    </Container>
  );
}
