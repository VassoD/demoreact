import "./AddMetric.css"
import MetricForm from "./MetricForm"

const AddMetric = (props) => {
    const addedMetricHandler = (metric) => {
        console.log("someone gave me a new metric to add", metric)
        if (
            metric.developer.trim().lenght === 0 ||
            metric.project.trim().length === 0 ||
            metric.count.trim().length === 0) {
        return false;
        }

        props.onAddMetric(metric)
        return true;
    }

    return (
        <div className="add-metric">
            <ErrorModal title="An error has occurred" message="The error is related to the"/>
            <MetricForm onAddMetric={addedMetricHandler} />
        </div>
    )
}

export default AddMetric