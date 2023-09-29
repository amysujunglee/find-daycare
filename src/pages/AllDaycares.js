import { useState } from 'react'
import DaycareList from '../components/daycares/DaycareList'
import DAYCARE_DATA from '../components/data'
import RegionBtn from '../components/layout/RegionBtn'

const AllDaycaresPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    fetch('https://find-daycare-default-rtdb.firebaseio.com/daycares.json')
        .then(response => {
            return response.json()
        }).then(data => {
            setIsLoading(false);
            setLoadedMeetups(data);
        })

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }
    return (
        <div>
            <h1 className="text-3xl w-full text-center my-4">Find a daycare</h1>
            <div className="flex w-full mx-0 gap-3 justify-center">
                <RegionBtn name="Burnaby" />
                <RegionBtn name="Coquitlam" />
                <RegionBtn name="New Westminster" />
                <RegionBtn name="Port Moody" />
            </div>
            <DaycareList daycares={DAYCARE_DATA} />
        </div>
    )
}

export default AllDaycaresPage