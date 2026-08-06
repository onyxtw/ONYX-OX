export type GovernanceData = {
  identity: {
    currentUser: string;
    roles: string[];
    permissions: string[];
  };
  sentinel: {
    alerts: number;
    lastEventAt: string;
  };
  continuity: {
    currentVersion: string;
    lastDeploymentAt: string;
  };
};

export type GovernanceResponse = {
  status: "ok";
  data: GovernanceData;
};

export const governanceFallback: GovernanceResponse = {
  status: "ok",
  data: {
    identity: {
      currentUser: "admin@onyx.local",
      roles: ["admin"],
      permissions: ["read:pages", "write:pages", "deploy:services"],
    },
    sentinel: {
      alerts: 0,
      lastEventAt: "2026-08-06T11:50:00Z",
    },
    continuity: {
      currentVersion: "1.0.0",
      lastDeploymentAt: "2026-08-05T09:30:00Z",
    },
  },
};

export async function fetchGovernance(): Promise<GovernanceResponse> {
  try {
    const response = await fetch("/api/ops/governance", { cache: "no-store" });
    if (!response.ok) {
      return governanceFallback;
    }

    return (await response.json()) as GovernanceResponse;
  } catch {
    return governanceFallback;
  }
}
