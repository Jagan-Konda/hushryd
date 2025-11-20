import { useState } from 'react';

import './index.css'
import { FaRegDotCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";


function RideDetails() {
    const [fromCity, setFromCity] = useState('')
    const [toCity, setToCity] = useState('')
    const [date,setDate] = useState('')
    const [noOfPassengers, setNoOfPassengers] = useState('')

    return (
        <div className="ride-details-main-container">
            <div className="ride-details-responsive-container">
                <div className="ride-details-icon-text-container">
                    <FaRegDotCircle className="ride-details-icon" style={{ color: "#D26100" }} />
                    <div className="ride-details-text-container">
                        <label className="ride-details-text-label" htmlFor='from'>FROM</label>
                        <input type="text" className="ride-details-input" id='from' placeholder='Enter departure city' value={fromCity} onChange={(e) => setFromCity(e.target.value)} />
                    </div>
                </div>

                <div className="ride-details-icon-text-container">
                    <IoLocationOutline className="ride-details-icon" />
                    <div className="ride-details-text-container">
                        <label className="ride-details-text-label" htmlFor='to'>TO</label>
                        <input type="text" className="ride-details-input" id='to' placeholder='Enter destination city' value={toCity} onChange={(e) => setToCity(e.target.value)} />
                    </div>
                </div>

                <div className="ride-details-icon-text-container" style={{ width: "244.52999877929688px" }}>
                    <CiCalendar className="ride-details-icon"  />
                    <div className="ride-details-text-container">
                        <label className="ride-details-text-label" htmlFor='date'>Date</label>
                        <input type="date" className="ride-details-input" id='date'  value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                </div>

                <div className="ride-details-icon-text-container" style={{ width: "190.63999938964844px", borderRight: "0px" }}>
                    <MdOutlinePeople className="ride-details-icon" />
                    <div className="ride-details-text-container">
                        <label className="ride-details-text-label" htmlFor='pass'>PASS</label>
                        <input type="text" className="ride-details-input" id='pass' placeholder='No.of Passengers' value={noOfPassengers} onChange={(e) => setNoOfPassengers(e.target.value)} />
                    </div>
                </div>

                <button className='ride-details-modify-button'>
                    Modify
                </button>
            </div>
        </div>
    )
}

export default RideDetails