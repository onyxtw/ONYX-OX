import type { ReactNode } from "react";

type GlassContainerProps = {
  children: ReactNode;
};

export default function GlassContainer({ children }: GlassContainerProps) {
  return <div className="ouids-glass-container">{children}</div>;
}
