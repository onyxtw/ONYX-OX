"use client";

import { useEffect, useState } from "react";

import DataPlane from "./components/sections/DataPlane";
import GovernanceLayer from "./components/sections/GovernanceLayer";
import Hero from "./components/sections/Hero";
import RuntimeMatrix from "./components/sections/RuntimeMatrix";
import SovereignCloud from "./components/sections/SovereignCloud";
import SystemOverview from "./components/sections/SystemOverview";
import GlassContainer from "./components/ui/GlassContainer";
import Grid from "./components/ui/Grid";
import {
  dataPlaneFallback,
  fetchDataPlane,
  type DataPlaneResponse,
} from "./lib/fetchDataPlane";
import {
  cloudFallback,
  fetchCloud,
  type CloudResponse,
} from "./lib/fetchCloud";
import {
  fetchGovernance,
  governanceFallback,
  type GovernanceResponse,
} from "./lib/fetchGovernance";
import {
  fetchRuntime,
  runtimeFallback,
  type RuntimeResponse,
} from "./lib/fetchRuntime";

export default function Page() {
  const [runtime, setRuntime] = useState<RuntimeResponse>(runtimeFallback);
  const [governance, setGovernance] =
    useState<GovernanceResponse>(governanceFallback);
  const [cloud, setCloud] = useState<CloudResponse>(cloudFallback);
  const [dataPlane, setDataPlane] =
    useState<DataPlaneResponse>(dataPlaneFallback);

  useEffect(() => {
    let mounted = true;

    Promise.all([
      fetchRuntime(),
      fetchGovernance(),
      fetchCloud(),
      fetchDataPlane(),
    ]).then(([runtimeResult, governanceResult, cloudResult, dataPlaneResult]) => {
      if (!mounted) {
        return;
      }

      setRuntime(runtimeResult);
      setGovernance(governanceResult);
      setCloud(cloudResult);
      setDataPlane(dataPlaneResult);
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="ouids-shell">
      <GlassContainer>
        <Hero
          runtimeStatus={runtime.data.autoHeal}
          identityUser={governance.data.identity.currentUser}
          sentinelAlerts={governance.data.sentinel.alerts}
        />
        <SystemOverview
          dataPlaneStatus={dataPlane.data.dbStatus}
          runtimeStatus={runtime.data.autoHeal}
          cloudStatus={cloud.data.azure.status}
          governanceStatus={
            governance.data.sentinel.alerts === 0 ? "active" : "warning"
          }
        />
        <Grid columns={2}>
          <DataPlane data={dataPlane.data} />
          <RuntimeMatrix data={runtime.data} />
          <SovereignCloud data={cloud.data} />
          <GovernanceLayer data={governance.data} />
        </Grid>
      </GlassContainer>
    </main>
  );
}
