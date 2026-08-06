import Card from "../ui/Card";
import StatusBadge from "../ui/StatusBadge";

type HeroProps = {
  runtimeStatus: string;
  identityUser: string;
  sentinelAlerts: number;
};

export default function Hero({
  runtimeStatus,
  identityUser,
  sentinelAlerts,
}: HeroProps) {
  return (
    <Card as="section" className="ouids-hero">
      <div>
        <p className="ouids-kicker">Sovereign AI Operating Window</p>
        <h1>ONYX COPILOT OS</h1>
        <p className="ouids-hero-copy">
          A transparent operating membrane spanning runtime, cloud, governance,
          and data systems.
        </p>
      </div>
      <div className="ouids-hero-status">
        <div>
          <span>Runtime</span>
          <StatusBadge label={runtimeStatus} state={runtimeStatus} />
        </div>
        <div>
          <span>Identity</span>
          <strong>{identityUser}</strong>
        </div>
        <div>
          <span>Sentinel</span>
          <StatusBadge
            label={sentinelAlerts === 0 ? "active" : "warning"}
            state={sentinelAlerts === 0 ? "active" : "warning"}
          />
        </div>
      </div>
    </Card>
  );
}
