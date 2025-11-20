import { VscWorkspaceTrusted } from "react-icons/vsc";
import "./index.css"

function Filters() {
    return (
        <div className="filters-main-container">
            <div className="filters-reset-container">
                <h1 className="filters-heading">Filters</h1>
                <button className="filters-reset-all-button">Reset All</button>
            </div>
            <div className="filters-sort-by-container">
                <p className="filters-sort-by-text">Sort By</p>
                <div className="filters-sort-by-input-text-container">
                    <input type="radio" className="filters-sort-by-input" name="sortBy" id="earliestDeparture" />
                    <label className="filters-sorts-by-input-label" htmlFor="earliestDeparture">Earliest departure</label>
                </div>
                <div className="filters-sort-by-input-text-container">
                    <input type="radio" className="filters-sort-by-input" name="sortBy" id="lowestPrice" />
                    <label className="filters-sorts-by-input-label" htmlFor="lowestPrice">Lowest price</label>
                </div>
                <div className="filters-sort-by-input-text-container">
                    <input type="radio" className="filters-sort-by-input" name="sortBy" id="shortestDuration" />
                    <label className="filters-sorts-by-input-label" htmlFor="shortestDuration">Shortest duration</label>
                </div>
            </div>

            <div className="filters-category-container">
                <h1 className="filters-category-heading">Departure Time</h1>
                <div className="filters-category-text-container">
                    <input className="filters-category-input" type="checkbox" />
                    <label className="filters-category-label">Before 06:00</label>
                </div>
                <div className="filters-category-text-container">
                    <input className="filters-category-input" type="checkbox" />
                    <label className="filters-category-label">06:00 - 12:00</label>
                </div>
                <div className="filters-category-text-container">
                    <input className="filters-category-input" type="checkbox" />
                    <label className="filters-category-label">12:01 - 18:00</label>
                </div>
                <div className="filters-category-text-container">
                    <input className="filters-category-input" type="checkbox" />
                    <label className="filters-category-label">After 18:00</label>
                </div>
            </div>

            <div className="filters-category-container">
                <h1 className="filters-category-heading">Amenities</h1>
                <div className="filters-category-text-container">
                    <input className="filters-category-input" type="checkbox" />
                    <label className="filters-category-label">Max 2 in back seat</label>
                </div>
                <div className="filters-category-text-container">
                    <input className="filters-category-input" type="checkbox" />
                    <label className="filters-category-label">Instant Approval</label>
                </div>
                <div className="filters-category-text-container">
                    <input className="filters-category-input" type="checkbox" />
                    <label className="filters-category-label">Pets allowed</label>
                </div>
                <div className="filters-category-text-container">
                    <input className="filters-category-input" type="checkbox" />
                    <label className="filters-category-label">Smoking allowed</label>
                </div>
            </div>

            <div className="filters-trust-safety-card">
                <div className="filters-trust-safety-icon-text">
                    <VscWorkspaceTrusted className="filters-trust-safety-icon" />
                    <p className="filters-trust-safety-text">TRUST & SAFETY</p>
                </div>
                <p className="filters-trust-safety-description">
                    All rides include 24/7 SOS support and
                    live ride tracking for your peace of
                    mind.
                </p>
            </div>

        </div>
    )
}

export default Filters