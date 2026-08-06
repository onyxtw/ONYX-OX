import Panel from "../ui/Panel";
import DataList from "../ui/DataList";
import Grid from "../ui/Grid";
import MetricTile from "../ui/MetricTile";
import type { GovernanceData } from "../../lib/fetchGovernance";

type GovernanceLayerProps = {
  data: GovernanceData;
};

export default function GovernanceLayer({ data }: GovernanceLayerProps) {
  return (
    <Panel
      title="Governance Layer"
      description="Identity, Sentinel telemetry, and continuity controls."
    >
      <Grid columns={2}>
        <MetricTile
          label="Identity"
          value={data.identity.currentUser}
          detail={data.identity.roles.join(", ")}
        />
        <MetricTile
          label="Sentinel Alerts"
          value={data.sentinel.alerts}
          status={data.sentinel.alerts === 0 ? "active" : "warning"}
          detail={data.sentinel.lastEventAt}
        />
      </Grid>
      <DataList
        items={[
          {
            label: "Permissions",
            value: data.identity.permissions.join(", "),
          },
          { label: "Last Sentinel Event", value: data.sentinel.lastEventAt },
          { label: "Current Version", value: data.continuity.currentVersion },
          {
            label: "Last Deployment",
            value: data.continuity.lastDeploymentAt,
          },
        ]}
      />
    </Panel>
  );
}
