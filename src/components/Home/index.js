import Header from "../Header"
import Footer from "../Footer"
import RideDetails from "../RideDetails"
import Filters from "../Filters"
import Rides from "../Rides"

import './index.css'

function Home() {
    return (
        <>
            <Header />
            <RideDetails />
            <div className="filters-rides-container">
                <Filters />
                <Rides />
            </div>
            <Footer />

        </>
    )
}

export default Home