import { useNavigate } from 'react-router-dom'
import DaycareForm from "../components/daycares/DaycareForm"

const AddDaycarePage = () => {
    const navigate = useNavigate();
    const addDaycareHandler = (daycareData) => {
        fetch('https://find-daycare-default-rtdb.firebaseio.com/daycares.json',
            {
                method: 'POST',
                body: JSON.stringify(daycareData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        })
    }
    return (
        <section>
            <h1>Add Daycare</h1>
            <DaycareForm onAddDaycare={addDaycareHandler} />
        </section>

    )
}

export default AddDaycarePage
