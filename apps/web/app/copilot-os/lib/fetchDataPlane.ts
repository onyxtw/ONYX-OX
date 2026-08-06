export type DataPlaneData = {
  sources: number;
  vectors: number;
  symbolLanguage: string;
  dbStatus: string;
};

export type DataPlaneResponse = {
  status: "ok";
  data: DataPlaneData;
};

export const dataPlaneFallback: DataPlaneResponse = {
  status: "ok",
  data: {
    sources: 3,
    vectors: 128,
    symbolLanguage: "synced",
    dbStatus: "connected",
  },
};

export async function fetchDataPlane(): Promise<DataPlaneResponse> {
  try {
    const response = await fetch("/api/ops/data-plane", { cache: "no-store" });
    if (!response.ok) {
      return dataPlaneFallback;
    }

    return (await response.json()) as DataPlaneResponse;
  } catch {
    return dataPlaneFallback;
  }
}
