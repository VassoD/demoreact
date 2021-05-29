import "./AddMetric.css"
import MetricForm from "./MetricForm"

const AddMetric = (props) => {
    const addedMetricHandler = (metric) => {
        console.log("someone gave me a new metric to add", metric)
    }

    return (
        <div className="add-metric">
            <MetricForm onAddMetric={addedMetricHandler} />
        </div>
    )
}

export default AddMetric