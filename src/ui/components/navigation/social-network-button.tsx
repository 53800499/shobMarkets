/** @format */

import React from "react";
import { footerSocialNetworksLinks } from "./app-link";
import { v4 as uuidv4 } from "uuid";
import Button from "@/ui/designSystem/button/button";
import { RiFacebookFill } from "react-icons/ri";
import clsx from "clsx";

interface Props {
  className?: string;
  theme?: "gray" | "accent" | "secondary";
}
export default function SocialNetworkButton({
  className,
  theme = "accent"
}: Props) {
  const icoList = footerSocialNetworksLinks.map((link) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{ icon: link.icon ? link.icon : RiFacebookFill }}
      baseUrl={link.baseUrl}
      linkType={link.type}
    />
  ));
  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  );
}
