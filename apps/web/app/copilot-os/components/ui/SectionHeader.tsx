type SectionHeaderProps = {
  title: string;
  description: string;
};

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="ouids-section-header">
      <p className="ouids-section-eyebrow">OUIDS v1.0</p>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  );
}
