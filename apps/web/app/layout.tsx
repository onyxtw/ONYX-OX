import type { ReactNode } from "react";

import "./copilot-os/styles/copilot-os.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
