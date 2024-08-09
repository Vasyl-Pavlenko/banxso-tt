import "./InfoSection.scss";

export default function InfoSection() {
  const INFO_SECTION_CARD_INFO: { name: string; value: string | number; id: number }[] = [
    {
      name: "Total launches",
      value: 43,
      id: 1,
    },
    {
      name: "Visits to the ISS",
      value: 46,
      id: 2,
    },
    {
      name: "Total reflights",
      value: 25,
      id: 3,
    },
  ];

  return (
    <section className="info-section">
      {INFO_SECTION_CARD_INFO.map(({ name, value, id }) => (
        <div key={id} className="info-section__card">
          <span className="info-section__card-value">
            {value}
          </span>

          <span className="info-section__card-name">
            {name}
          </span>
        </div>
      ))}
    </section>
  );
}
