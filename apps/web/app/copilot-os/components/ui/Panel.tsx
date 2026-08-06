import type { ReactNode } from "react";

import Card from "./Card";
import SectionHeader from "./SectionHeader";

type PanelProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function Panel({ title, description, children }: PanelProps) {
  return (
    <Card as="section">
      <SectionHeader title={title} description={description} />
      {children}
    </Card>
  );
}
