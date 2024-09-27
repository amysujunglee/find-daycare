import DAYCARE_DATA from "../components/data/daycares";

const Regions = ({ buttonItems, filterDaycares }: any) => {
  const daycaresNumber = (region: any) => {
    const daycareList = DAYCARE_DATA.filter((item) => item.region === region);
    return daycareList.length;
  };

  return (
    <div className="space-x-4">
      {buttonItems.map((item: any) => (
        <button className="btn" key={item} onClick={() => filterDaycares(item)}>
          {item}
          <span>({daycaresNumber(item)})</span>
        </button>
      ))}
    </div>
  );
};

export default Regions;
