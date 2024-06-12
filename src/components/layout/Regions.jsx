import DAYCARE_DATA from "../utils/daycares";

const daycaresNumber = (region) => {
  const daycareList = DAYCARE_DATA.filter((item) => item.region === region);
  return daycareList.length;
};

const Regions = ({ buttonItems, filterDaycares }) => {
  return (
    <div className="space-x-4">
      {buttonItems.map((item) => (
        <button className="btn" key={item} onClick={() => filterDaycares(item)}>
          {item}
          <span>({daycaresNumber(item)})</span>
        </button>
      ))}
    </div>
  );
};

export default Regions;
