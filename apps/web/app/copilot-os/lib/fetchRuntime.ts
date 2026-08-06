export type RuntimeData = {
  autoHeal: string;
  autoOptimize: string;
  autoMaintain: string;
  lastRunAt: string;
  lastEventSummary: string;
};

export type RuntimeResponse = {
  status: "ok";
  data: RuntimeData;
};

export const runtimeFallback: RuntimeResponse = {
  status: "ok",
  data: {
    autoHeal: "active",
    autoOptimize: "idle",
    autoMaintain: "active",
    lastRunAt: "2026-08-06T12:00:00Z",
    lastEventSummary: "Auto-heal reconciled two runtime nodes.",
  },
};

export async function fetchRuntime(): Promise<RuntimeResponse> {
  try {
    const response = await fetch("/api/ops/runtime", { cache: "no-store" });
    if (!response.ok) {
      return runtimeFallback;
    }

    return (await response.json()) as RuntimeResponse;
  } catch {
    return runtimeFallback;
  }
}
