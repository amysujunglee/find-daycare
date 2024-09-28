import { useState } from "react";
import DAYCARE_DATA from "../data/daycares";
import DaycareList from "../daycares/DaycareList";
import Regions from "../../layout/Regions";

// TODO: Create a logo
// TODO: Display an empty image
// TODO: Responsive for tablet and mobile
// TODO: Inform the users where the daycares list is coming from
// TODO: Filter daycares
// TODO: Find how to hide the daycares data (API)

const FindDaycare = () => {
  const [daycares, setDaycares] = useState(DAYCARE_DATA);
  const buttonItems = [
    ...new Set<string>(DAYCARE_DATA.map((item) => item.region)),
  ];

  const filterDaycares = (region: any) => {
    const daycareList = DAYCARE_DATA.filter((item) => item.region === region);
    setDaycares(daycareList);
  };

  const filterDaycareHandler = (e: any) => {
    const text = e.target.value.toLowerCase();
  };

  const displayAllDaycares = () => {
    const allDaycareList = DAYCARE_DATA.map((daycare) => daycare);
    setDaycares(allDaycareList);
  };

  return (
    <main>
      <div className="mb-12">
        <h1 className="text-3xl w-full text-center mt-8 mb-2">
          Find a Home Daycare in BC, Canada 🇨🇦
        </h1>
        <p className="text-center text-gray-500">
          Last updated: December, 2023
        </p>
      </div>
      <div className="mt-4 mb-8 mx-auto w-1/2">
        <input
          type="text"
          className="border-b-2 border-blue-900 w-full p-2"
          id="filter"
          placeholder="Search by daycare name"
          onChange={filterDaycareHandler}
        />
      </div>

      <div className="flex w-full mx-0 gap-3 justify-center">
        <Regions
          buttonItems={buttonItems}
          filterDaycares={filterDaycares}
          displayAllDaycares={displayAllDaycares}
        />
      </div>
      <DaycareList daycares={daycares} />
    </main>
  );
};

export default FindDaycare;
