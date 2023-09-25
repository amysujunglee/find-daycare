import RegionBtn from '../components/RegionBtn'
import Daycare from '../components/Daycare'

const AllDaycaresPage = () => {
    return (
        <div>
            <h1 className="text-3xl w-full text-center my-4">Find a daycare</h1>
            <div className="flex w-full mx-0 gap-3 justify-center">
                <RegionBtn name="Burnaby" />
                <RegionBtn name="Coquitlam" />
                <RegionBtn name="New Westminster" />
                <RegionBtn name="Port Moody" />
            </div>
            <Daycare />
        </div>
    )
}

export default AllDaycaresPage