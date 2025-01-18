/** @format */

import clsx from "clsx";
import React from "react";
interface Props {
  variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "span";
  theme?: "black" | "white" | "gray" | "primary" | "secondary";
  weight?: "regular" | "medium";
  className?: string;
  children: React.ReactNode /* 
  isLoading;
  iconTheme  */;
}

export default function Typography({
  children,
  variant = "body",
  component: Component = "div",
  theme = "black",
  weight = "regular",
  className
}: Props) {
  let variantStyle: string = "",
    colorStyle: string = "";

  switch (theme) {
    case "black":
      colorStyle = "text-gray";
      break;
    case "gray":
      colorStyle = "text-gray-4";
      break;

    case "white":
      colorStyle = "text-white";
      break;

    case "primary":
      colorStyle = "text-primary";
      break;

    default:
      break;
  }

  switch (variant) {
    case "display":
      variantStyle = "text-8xl md:text-6xl";
      break;
    case "h1":
      variantStyle = "text-7xl md:text-5xl";
      break;
    case "h2":
      variantStyle = "text-6xl md:text-4xl";
      break;
    case "h3":
      variantStyle = "text-5xl md:text-3xl";
      break;
    case "h4":
      variantStyle = "text-4xl md:text-2xl";
      break;
    case "h5":
      variantStyle = "text-3xl md:text-1x";
      break;
    case "lead":
      variantStyle = "text-2xl md:text-xl";
      break;
    case "body-lg":
      variantStyle = "text-lg md:text-xl";
      break;
      break;
    case "body":
      variantStyle = "text-2xl md:text-xl";
      break;
    case "body-base":
      variantStyle = "text-base";
      break;
    case "body-sm":
      variantStyle = "text-sm";
      break;
    case "caption1":
      variantStyle = "text-caption1";
      break;
    case "caption2":
      variantStyle = "text-caption2";
      break;
    case "caption3":
      variantStyle = "text-caption3";
      break;
    case "caption4":
      variantStyle = "text-caption4";
      break;
  }
  return (
    <Component
      className={clsx(
        variantStyle,
        colorStyle,
        weight === "medium" && "font-medium",
        className
      )}
    >
      {children}
    </Component>
  );
}
