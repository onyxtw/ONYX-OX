type StatusBadgeProps = {
  label: string;
  state: string;
};

function resolveState(state: string) {
  switch (state.toLowerCase()) {
    case "active":
    case "running":
    case "connected":
    case "synced":
    case "ok":
      return "active";
    case "warning":
      return "warning";
    case "error":
    case "failed":
    case "offline":
      return "error";
    default:
      return "idle";
  }
}

export default function StatusBadge({ label, state }: StatusBadgeProps) {
  const variant = resolveState(state);

  return (
    <span className={`ouids-status-badge ouids-status-${variant}`}>
      {label}
    </span>
  );
}
