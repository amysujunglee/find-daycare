import DaycareList from '../components/daycares/DaycareList'
import DAYCARE_DATA from '../components/data'
import Buttons from '../components/layout/Buttons'
import { useState } from 'react'

const AllDaycaresPage = () => {
    const [daycares, setDaycares] = useState(DAYCARE_DATA)
    const buttonItems = [...new Set(DAYCARE_DATA.map(item => item.region))]

    const filterDaycares = (region) => {
        const daycareList = DAYCARE_DATA.filter((item) => item.region === region)
        setDaycares(daycareList)
    }

    return (
        <div>
            <h1 className="text-3xl w-full text-center my-4">Find a daycare</h1>
            <div className="flex w-full mx-0 gap-3 justify-center">
                <Buttons buttonItems={buttonItems} filterDaycares={filterDaycares} setDaycares={setDaycares} />
            </div>
            <DaycareList daycares={daycares} />
        </div>
    )
}

export default AllDaycaresPage