import DaycareForm from "../components/daycares/DaycareForm"

const AddDaycarePage = () => {
    const addMeetupHandler = (daycareData) => {
        fetch('https://find-daycare-default-rtdb.firebaseio.com/daycares.json',
            {
                method: 'POST',
                body: JSON.stringify(daycareData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

    }
    return (
        <section>
            <h1>Add Daycare</h1>
            <DaycareForm onAddDaycare={addMeetupHandler} />
        </section>

    )
}

export default AddDaycarePage
