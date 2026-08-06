import Panel from "../ui/Panel";
import DataList from "../ui/DataList";
import Grid from "../ui/Grid";
import MetricTile from "../ui/MetricTile";
import type { CloudData } from "../../lib/fetchCloud";

type SovereignCloudProps = {
  data: CloudData;
};

export default function SovereignCloud({ data }: SovereignCloudProps) {
  return (
    <Panel
      title="Sovereign Cloud"
      description="Deployment and health across Azure, Fabric, and GitHub."
    >
      <Grid columns={2}>
        <MetricTile
          label="Azure"
          value={data.azure.region}
          status={data.azure.status}
          detail={`${data.azure.services} services online`}
        />
        <MetricTile
          label="Fabric"
          value={`${data.fabric.workspaces} workspace`}
          status={data.fabric.status}
          detail="Analytics and knowledge fabric"
        />
        <MetricTile
          label="GitHub"
          value={`${data.github.repos} repos`}
          status={data.github.status}
          detail={`Version ${data.github.version}`}
        />
        <MetricTile
          label="Resource Health"
          value={data.azure.health}
          status={data.azure.health}
          detail="Sovereign cloud posture"
        />
      </Grid>
      <DataList
        items={[
          { label: "Azure Version", value: data.azure.version },
          { label: "Fabric Version", value: data.fabric.version },
          { label: "GitHub Version", value: data.github.version },
        ]}
      />
    </Panel>
  );
}
