import RidesListItem from "../RidesListItem";

import { LuBell } from "react-icons/lu";

import "./index.css"

const availableRidesList = [
    {
        id: 1,
        name: "Rahul K.",
        starting_time: "08:00",
        boarding_point: "Andheri East",
        reaching_time: "11:10",
        dropping_point: "Wakad Bridge",
        journey_time: "3h 10m",
        no_of_ratings: 156,
        overall_rating: 4.9,
        seats_left: 2,
        price: 450,
        tags: {
            is_id_verified: true,
            is_instant_booking_avaialable: true,
            ladies_only: false,
            is_pet_friendly: false,
            max_2_in_back: false,
            is_smoking_allowed: false
        }

    },

    {
        id: 2,
        name: "Priya S..",
        starting_time: "09:30",
        boarding_point: "Bandra West",
        reaching_time: "12:30",
        dropping_point: "Pune Station",
        journey_time: "3h 00m",
        no_of_ratings: 24,
        overall_rating: 5.0,
        seats_left: 1,
        price: 520,
        tags: {
            is_id_verified: false,
            is_instant_booking_avaialable: false,
            ladies_only: true,
            is_pet_friendly: true,
            max_2_in_back: false,
            is_smoking_allowed: false
        }

    },

    {
        id: 3,
        name: "Amit V.",
        starting_time: "10:00",
        boarding_point: "Vashi Plaza",
        reaching_time: "13:30",
        dropping_point: "Hinjewadi Phase 1",
        journey_time: "3h 30m",
        no_of_ratings: 42,
        overall_rating: 4.7,
        seats_left: 3,
        price: 380,
        tags: {
            is_id_verified: false,
            is_instant_booking_avaialable: false,
            ladies_only: false,
            is_pet_friendly: false,
            max_2_in_back: true,
            is_smoking_allowed: false
        }

    },
    
    {
        id: 4,
        name: "Vikram S.",
        starting_time: "11:00",
        boarding_point: "Dadar TT",
        reaching_time: "14:15",
        dropping_point: "Magarpatta",
        journey_time: "3h 15m",
        no_of_ratings: 88,
        overall_rating: 4.5,
        seats_left: 0,
        price: 400,
        tags: {
            is_id_verified: false,
            is_instant_booking_avaialable: false,
            ladies_only: false,
            is_pet_friendly: false,
            max_2_in_back: false,
            is_smoking_allowed: false
        }
    }
]

function Rides() {
    return (
        <div className="rides-main-container">
            <div className="rides-count-alert-container">
                <p className="rides-count-text">42 rides available</p>
                <button className="rides-alert-button">
                    <LuBell className="rides-alert-icon" />
                    Create Alert
                </button>
            </div>

            <ul className="rides-list-container">
                {availableRidesList.map(each => (
                    <RidesListItem key={each.id} rideDetails={each} />
                ))}
            </ul>
        </div>
    )
}

export default Rides