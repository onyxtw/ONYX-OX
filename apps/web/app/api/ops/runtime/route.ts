import { NextResponse } from "next/server";

import { runtimeFallback } from "../../../copilot-os/lib/fetchRuntime";

export async function GET() {
  return NextResponse.json(runtimeFallback);
}
