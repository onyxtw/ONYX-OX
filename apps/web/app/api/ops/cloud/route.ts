import { NextResponse } from "next/server";

import { cloudFallback } from "../../../copilot-os/lib/fetchCloud";

export async function GET() {
  return NextResponse.json(cloudFallback);
}
