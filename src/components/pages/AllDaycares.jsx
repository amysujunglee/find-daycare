import DaycareList from "../daycares/DaycareList";
import DAYCARE_DATA from "../utils/daycare";

import { useState } from "react";
import Regions from "../layout/Regions";

const AllDaycares = () => {
  const [daycares, setDaycares] = useState(DAYCARE_DATA);
  const buttonItems = [...new Set(DAYCARE_DATA.map((item) => item.region))];

  const filterDaycares = (region) => {
    const daycareList = DAYCARE_DATA.filter((item) => item.region === region);
    setDaycares(daycareList);
  };

  return (
    <div>
      <h1 className="text-3xl w-full text-center my-4">Find a daycare</h1>
      {/* TODO: Inform the users where the daycares list is coming from */}
      {/* <p>This daycares are all from the Gov. website:</p> */}
      <div className="flex w-full mx-0 gap-3 justify-center">
        <Regions buttonItems={buttonItems} filterDaycares={filterDaycares} />
      </div>
      <DaycareList daycares={daycares} />
    </div>
  );
};

export default AllDaycares;
