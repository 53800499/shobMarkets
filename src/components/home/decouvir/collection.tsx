/** @format */

import Button from "@/ui/designSystem/button/button";
import Typography from "@/ui/designSystem/typography/typography";
import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
}

export default function Collection({ className }: Props) {
  return (
    <div
      className={clsx(
        "z-10 p-5 bg-primary-1 max-w-[643px] overflow-hidden  flex flex-col ", 
        className
      )}
    >
      <Typography variant="caption1" className="my-6 sm:text-left">
        Nouvel arrivant
      </Typography>
      <Typography
        component="h2"
        variant="h2"
        theme="primary"
        className="mb-5 md:text-4xl"
      >
        Découvrez Nos <br /> Nouvelle Collection,
      </Typography>
      <Typography variant="body-lg" className="mb-10 sm:text-left">
        où élégance et confort se rencontrent dans des pièces uniques conçues pour
        sublimer votre style. Ne manquez pas lopportunité de renouveler votre
        garde-robe avec des créations modernes et durables !
      </Typography>
      <Button variant="accent" size="medium" className=" sm:self-start">
        Achéter Maintenant
      </Button>
    </div>
  );
}
