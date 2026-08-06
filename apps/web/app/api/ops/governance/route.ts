import { NextResponse } from "next/server";

import { governanceFallback } from "../../../copilot-os/lib/fetchGovernance";

export async function GET() {
  return NextResponse.json(governanceFallback);
}
