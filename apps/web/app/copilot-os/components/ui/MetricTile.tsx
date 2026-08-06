import StatusBadge from "./StatusBadge";

type MetricTileProps = {
  label: string;
  value: string | number;
  status?: string;
  detail?: string;
};

export default function MetricTile({
  label,
  value,
  status,
  detail,
}: MetricTileProps) {
  return (
    <div className="ouids-metric-tile">
      <div className="ouids-metric-meta">
        <span>{label}</span>
        {status ? <StatusBadge label={status} state={status} /> : null}
      </div>
      <strong>{value}</strong>
      {detail ? <p>{detail}</p> : null}
    </div>
  );
}
