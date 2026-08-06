import type { HTMLAttributes, ReactNode } from "react";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "article" | "div" | "section";
};

export default function Card({
  as = "article",
  children,
  className = "",
  ...props
}: CardProps) {
  const Component = as;

  return (
    <Component className={`ouids-card ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
