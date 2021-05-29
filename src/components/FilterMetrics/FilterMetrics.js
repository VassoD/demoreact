import { useState } from "react"
import "./FilterMetrics.css"


const FilterMetrics = (props) => {
    const [startDate, setStartDate] = useState ("")

    const startDateChangeHandler = (event) => {
        let newStartDate = event.target.value
        console.log(newStartDate)
        props.onSetStartDate(newStartDate)
        setStartDate(newStartDate)
    }

    return (
        <div className="filter-metrics">
            <div className="filter-metrics__elements">
                <div className="filter-metrics_element">
                    <p>Filter the metrics</p>
                </div>
                <div>
                    <label>Start on</label>
                    <input type="date" value = {startDate} onChange={startDateChangeHandler} />
                </div>
            </div>
        </div>
    )
}

export default FilterMetrics