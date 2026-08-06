export type CloudData = {
  azure: {
    status: string;
    region: string;
    services: number;
    version: string;
    health: string;
  };
  fabric: {
    status: string;
    workspaces: number;
    version: string;
  };
  github: {
    status: string;
    repos: number;
    version: string;
  };
};

export type CloudResponse = {
  status: "ok";
  data: CloudData;
};

export const cloudFallback: CloudResponse = {
  status: "ok",
  data: {
    azure: {
      status: "running",
      region: "eastasia",
      services: 3,
      version: "2026.08.1",
      health: "active",
    },
    fabric: {
      status: "idle",
      workspaces: 1,
      version: "2026.08.1",
    },
    github: {
      status: "running",
      repos: 2,
      version: "1.0.0",
    },
  },
};

export async function fetchCloud(): Promise<CloudResponse> {
  try {
    const response = await fetch("/api/ops/cloud", { cache: "no-store" });
    if (!response.ok) {
      return cloudFallback;
    }

    return (await response.json()) as CloudResponse;
  } catch {
    return cloudFallback;
  }
}
