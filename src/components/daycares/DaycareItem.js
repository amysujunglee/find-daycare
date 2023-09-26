import DAYCARE_DATA from "../data"

const Daycare = () => {
    return (
        <div className="flex">
            {DAYCARE_DATA.map(daycare => {
                return <ul className='bg-gray-400 w-1/3 p-4 m-4'>
                    {/* <li key={daycare.id}><img src={daycare.image} alt={`${daycare.name}`} /></li> */}
                    {daycare.name && <li key={daycare.id}><span>Name: </span>{daycare.name}</li>}
                    {daycare.type && <li key={daycare.id}><span>Type: </span>{daycare.type}</li>}
                    {daycare.maxCap && <li key={daycare.id}><span>Max capacity: </span>{daycare.maxCap}</li>}
                    {daycare.owner && <li key={daycare.id}><span>Owner: </span>{daycare.owner}</li>}
                    {daycare.address && <li key={daycare.id}><span>Address: </span>{daycare.address}</li>}
                    {<daycare className="phoneNum"></daycare> && <li key={daycare.id}><span>Phone number: </span>{daycare.phoneNumber}</li>}
                    {daycare.google && <li key={daycare.id}><span>Google Reviews/Ratings: </span>{daycare.google}</li>}
                    {daycare.FHreport && <li key={daycare.id}><span>Fraser Health report: </span>{daycare.FHreport}</li>}
                </ul>
            })}
        </div>
    )
}

export default Daycare
