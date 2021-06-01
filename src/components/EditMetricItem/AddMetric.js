import "./AddMetric.css"
import MetricForm from "./MetricForm"
import ErrorModal from "../UI/ErrorModal"
import { useState } from "react"

const AddMetric = (props) => {
    const [error, setError] = useState()
    const addedMetricHandler = (metric) => {
        console.log("someone gave me a new metric to add", metric)
        if (
            metric.developer.trim().lenght === 0 ||
            metric.project.trim().length === 0 ||
            metric.count.trim().length === 0) {
                setError("Error data detected")
        return false;
        }

        props.onAddMetric(metric)
        return true;
    }

    const onDismissModalHandler = () => {
        console.log("reseting error")
        setError(null)
    }

    return (
        <div className="add-metric">
            {error && <ErrorModal title="An error has occurred" message={error} onDismiss={onDismissModalHandler}/> }
            <MetricForm onAddMetric={addedMetricHandler} />
        </div>
    )
}

export default AddMetric