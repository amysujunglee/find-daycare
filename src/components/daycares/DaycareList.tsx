import DaycareItem from "./DaycareItem";

const DaycareList = ({ daycares }: any) => {
  return (
    <ul className="m-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      {daycares.map((daycare: any) => (
        <DaycareItem
          key={daycare.id}
          id={daycare.id}
          image={daycare.image}
          name={daycare.name}
          region={daycare.region}
          type={daycare.type}
          maxCap={daycare.maxCap}
          owner={daycare.owner}
          address={daycare.address}
          phoneNumber={daycare.phoneNumber}
          google={daycare.google}
          FHreport={daycare.FHreport}
          FHreportUrl={daycare.FHreportUrl}
        />
      ))}
    </ul>
  );
};

export default DaycareList;
