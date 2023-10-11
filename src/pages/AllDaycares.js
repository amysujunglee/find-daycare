import DaycareList from '../components/daycares/DaycareList'
import DAYCARE_DATA from '../components/data'
import RegionBtn from '../components/layout/RegionBtn'

const AllDaycaresPage = () => {
    const handleClick = () => {
        console.log('clicked!')
    }
    return (
        <div>
            <h1 className="text-3xl w-full text-center my-4">Find a daycare</h1>
            <div className="flex w-full mx-0 gap-3 justify-center">
                <RegionBtn name="Burnaby" onClick={handleClick} />
                <RegionBtn name="Coquitlam" />
                <RegionBtn name="New Westminster" />
                <RegionBtn name="Port Moody" />
                <RegionBtn name="Maple Ridge" />
            </div>
            <DaycareList daycares={DAYCARE_DATA} />
        </div>
    )
}

export default AllDaycaresPage