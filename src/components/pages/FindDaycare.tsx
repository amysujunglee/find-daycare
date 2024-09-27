import { useState } from "react";
import DAYCARE_DATA from "../data/daycares";
import DaycareList from "../daycares/DaycareList";
import Regions from "../../layout/Regions";

// TODO: Inform the users where the daycares list is coming from

const FindDaycare = () => {
  const [daycares, setDaycares] = useState(DAYCARE_DATA);
  //   const buttonItems = [...new Set(DAYCARE_DATA.map((item) => item.region))];

  const filterDaycares = (region: any) => {
    const daycareList = DAYCARE_DATA.filter((item) => item.region === region);
    setDaycares(daycareList);
  };

  return (
    <div>
      <h1 className="text-3xl w-full text-center my-4">
        Find a Home Daycare in BC, Canada!
      </h1>
      <p className="text-center">Last updated: December 2023</p>
      {/* <p>This daycares are all from the Gov. website:</p> */}
      <div className="flex w-full mx-0 gap-3 justify-center">
        {/* <Regions buttonItems={buttonItems} filterDaycares={filterDaycares} /> */}
      </div>
      <DaycareList daycares={daycares} />
    </div>
  );
};

export default FindDaycare;
