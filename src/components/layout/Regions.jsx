const Regions = ({ buttonItems, filterDaycares }) => {
  return (
    <div className="space-x-4">
      {buttonItems.map((item) => (
        <button className="btn" key={item} onClick={() => filterDaycares(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default Regions;
