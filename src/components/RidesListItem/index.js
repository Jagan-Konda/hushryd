import "./index.css"

function RidesListItem(props) {
    const { rideDetails } = props
    const {
        id,
        name,
        starting_time,
        boarding_point,
        reaching_time,
        dropping_point,
        journey_time,
        no_of_ratings,
        ovearall_rating,
        seats_left,
        price,
        tags
    } = rideDetails

    return (
        <li className="rides-list-item">
            <div className="rides-list-times-owner-details-container">
                <div className="rides-list-times-places-container">
                    <div className="rides-list-time-place-container">
                        <h1 className="rides-list-time">{starting_time}</h1>
                        <p className="rides-list-place"> {boarding_point}</p>
                    </div>
                    <div className="rides-list-journey-time-container">
                        <p className="rides-list-journey-time">{journey_time}</p>
                    </div>
                    <div className="rides-list-time-place-container">
                        <h1 className="rides-list-time">{reaching_time}</h1>
                        <p className="rides-list-place">{dropping_point}</p>
                    </div>
                </div>

                <div class="timeline">
                    <span class="circle top-circle"></span>
                    <span class="line"></span>
                    <span class="circle bottom-circle"></span>
                    <span class="extra-line"></span>
                </div>

                



            </div>
        </li>
    )
}

export default RidesListItem