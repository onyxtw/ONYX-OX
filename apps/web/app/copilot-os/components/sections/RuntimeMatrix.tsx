import Panel from "../ui/Panel";
import DataList from "../ui/DataList";
import type { RuntimeData } from "../../lib/fetchRuntime";

type RuntimeMatrixProps = {
  data: RuntimeData;
};

export default function RuntimeMatrix({ data }: RuntimeMatrixProps) {
  return (
    <Panel
      title="Runtime Matrix"
      description="Auto-heal, optimize, and maintain control loops."
    >
      <DataList
        items={[
          { label: "Auto-Heal", value: data.autoHeal, status: data.autoHeal },
          {
            label: "Auto-Optimize",
            value: data.autoOptimize,
            status: data.autoOptimize,
          },
          {
            label: "Auto-Maintain",
            value: data.autoMaintain,
            status: data.autoMaintain,
          },
          { label: "Last Run", value: data.lastRunAt },
          { label: "Recent Event", value: data.lastEventSummary },
        ]}
      />
    </Panel>
  );
}
