import DAYCARE_DATA from "../components/data/daycares";

const Regions = ({ buttonItems, filterDaycares, displayAllDaycares }: any) => {
  const daycaresNumber = (region: any) => {
    const daycareList = DAYCARE_DATA.filter((item) => item.region === region);
    return daycareList.length;
  };

  return (
    <div className="space-x-4">
      <button className="btn" onClick={displayAllDaycares}>
        All<span>({DAYCARE_DATA.length})</span>
      </button>
      {buttonItems.map((item: any) => (
        <button
          className="btn"
          key={item}
          onClick={(e) => filterDaycares(item, e)}
        >
          {item}
          <span>({daycaresNumber(item)})</span>
        </button>
      ))}
    </div>
  );
};

export default Regions;
