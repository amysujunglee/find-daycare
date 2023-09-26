import DaycareItem from './DaycareItem'

const DaycareList = (props) => {
    return (
        <ul className='m-4 flex gap-4'>
            {props.daycares.map(daycare => <DaycareItem key={daycare.id} id={daycare.id} image={daycare.image} name={daycare.name} type={daycare.type} maxCap={daycare.maxCap} owner={daycare.owner} address={daycare.address} phoneNumber={daycare.phoneNumber} google={daycare.google} FHreport={daycare.FHreport} />)}
        </ul>
    )
}

export default DaycareList