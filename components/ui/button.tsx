import { ButtonHTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "rounded-full bg-green-500 px-6 py-3",
        "font-medium text-white",
        "transition hover:scale-105",
        "hover:bg-green-600",
        className
      )}
      {...props}
    />
  );
}