import StatusBadge from "./StatusBadge";

type DataListItem = {
  label: string;
  value: string | number;
  status?: string;
};

type DataListProps = {
  items: DataListItem[];
};

export default function DataList({ items }: DataListProps) {
  return (
    <dl className="ouids-data-list">
      {items.map((item) => (
        <div className="ouids-data-row" key={item.label}>
          <dt>{item.label}</dt>
          <dd>
            <span>{item.value}</span>
            {item.status ? (
              <StatusBadge label={item.status} state={item.status} />
            ) : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}
