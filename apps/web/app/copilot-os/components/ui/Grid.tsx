import type { ReactNode } from "react";

type GridProps = {
  children: ReactNode;
  columns?: 1 | 2 | 4;
};

export default function Grid({ children, columns = 2 }: GridProps) {
  return <div className={`ouids-grid ouids-grid--${columns}`}>{children}</div>;
}
