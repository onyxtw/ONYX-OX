import Panel from "../ui/Panel";
import DataList from "../ui/DataList";
import Grid from "../ui/Grid";
import MetricTile from "../ui/MetricTile";
import type { DataPlaneData } from "../../lib/fetchDataPlane";

type DataPlaneProps = {
  data: DataPlaneData;
};

export default function DataPlane({ data }: DataPlaneProps) {
  return (
    <Panel
      title="Data Plane"
      description="Sources, vectors, symbols, and database connectivity."
    >
      <Grid columns={2}>
        <MetricTile label="Data Sources" value={data.sources} />
        <MetricTile label="Vector Documents" value={data.vectors} />
      </Grid>
      <DataList
        items={[
          {
            label: "Symbol Language",
            value: data.symbolLanguage,
            status: data.symbolLanguage,
          },
          { label: "DB Connection", value: data.dbStatus, status: data.dbStatus },
        ]}
      />
    </Panel>
  );
}
