import DaycareList from '../components/daycares/DaycareList'
import DAYCARE_DATA from '../components/data'
import RegionBtns from '../components/layout/RegionBtns'
import { useState } from 'react'

const AllDaycaresPage = () => {
    const [daycareData, setDaycareData] = useState(DAYCARE_DATA)
    const regionItems = [...new Set(daycareData.map(daycare => daycare.region))]

    console.log(regionItems)

    const handleClick = (e) => {
        const regionName = e.target.innerHTML;
        const regionList = DAYCARE_DATA.map(daycare => {
            return daycare.region;
        })
        const result = regionList.filter(item => item === regionName)
        // console.log(result);
    }

    return (
        <div>
            <h1 className="text-3xl w-full text-center my-4">Find a daycare</h1>
            <div className="flex w-full mx-0 gap-3 justify-center">
                <RegionBtns regions={regionItems} onClick={handleClick} />
            </div>
            <DaycareList daycares={daycareData} />
        </div>
    )
}

export default AllDaycaresPage