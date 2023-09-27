import { useRef } from 'react'
import Card from '../ui/Card'

const DaycareForm = () => {
    const nameInputRef = useRef();
    const regionInputRef = useRef();
    const addressInputRef = useRef();
    const phoneNumberInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredRegion = regionInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPhoneNumber = phoneNumberInputRef.current.value;

        const daycareData = {
            name: enteredName,
            region: enteredRegion,
            address: enteredAddress,
            phoneNumber: enteredPhoneNumber
        }

        console.log(daycareData)
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name' className='border-2' ref={nameInputRef} />
                </div>
                <div>
                    <label htmlFor="region">Region</label>
                    <input type="text" id='region' className='border-2' ref={regionInputRef} />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input type="text" id='address' className='border-2' ref={addressInputRef} />
                </div>
                <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="tel" id='phoneNumber' className='border-2' ref={phoneNumberInputRef} />
                </div>

                <div>
                    <button className='bg-blue-200 px-3 py-1.5'>Add Daycare</button>
                </div>
            </form>
        </Card>
    )
}

export default DaycareForm
