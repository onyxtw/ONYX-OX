import { NextResponse } from "next/server";

import { dataPlaneFallback } from "../../../copilot-os/lib/fetchDataPlane";

export async function GET() {
  return NextResponse.json(dataPlaneFallback);
}
