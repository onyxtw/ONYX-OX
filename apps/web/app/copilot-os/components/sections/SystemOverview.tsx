import Grid from "../ui/Grid";
import MetricTile from "../ui/MetricTile";
import Panel from "../ui/Panel";

type SystemOverviewProps = {
  dataPlaneStatus: string;
  runtimeStatus: string;
  cloudStatus: string;
  governanceStatus: string;
};

export default function SystemOverview({
  dataPlaneStatus,
  runtimeStatus,
  cloudStatus,
  governanceStatus,
}: SystemOverviewProps) {
  return (
    <Panel
      title="System Overview"
      description="Operational summary across the six sovereign layers."
    >
      <Grid columns={4}>
        <MetricTile
          label="Data Plane"
          value="Data Sources"
          status={dataPlaneStatus}
          detail="Vector, symbol, and storage pipelines."
        />
        <MetricTile
          label="Runtime Matrix"
          value="Self-Healing"
          status={runtimeStatus}
          detail="Autonomous repair and optimization loop."
        />
        <MetricTile
          label="Sovereign Cloud"
          value="Multi-Platform"
          status={cloudStatus}
          detail="Azure, Fabric, and GitHub orchestration."
        />
        <MetricTile
          label="Governance Layer"
          value="Identity & Audit"
          status={governanceStatus}
          detail="Permissions, telemetry, and continuity."
        />
      </Grid>
    </Panel>
  );
}
