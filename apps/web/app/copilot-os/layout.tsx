import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ONYX COPILOT OS",
  description: "Sovereign AI Operating Window",
};

export default function CopilotOsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
