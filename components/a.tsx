import cn from "classnames";
import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
  href: string;
  blank?: boolean;
  className?: string;
};

function A({ children, href, blank = true, className, ...props }: Props) {
  const isBlank = blank
    ? {
        rel: "noreferrer",
        target: "_blank",
      }
    : {};

  return (
    <a
      href={href}
      {...isBlank}
      className={cn("hover:underline", className)}
      {...props}>
      {children}
    </a>
  );
}

export default A;
