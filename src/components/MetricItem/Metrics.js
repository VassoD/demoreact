import "./Metrics.css"
import MetricsList from "./MetricsList.js"
import Card from "../UI/Card"

const Metrics = (props) => {
    console.log("filtering on", props.filterDate)
    const date = new Date(props.filterDate)

    const filteredItems = props.data.filter( item => {
        console.log("filtering on", item.date)
        console.log("the year is", item.date.get)
        return (
            item.date.getYear() === date.getYear() &&
            item.date.getMonth() === date.getMonth() &&
            item.date.getDate() === date.getDate())
    })

    return (
        <Card className="metrics">
            <MetricsList data={filteredItems}/>
        </Card>
    )
}

export default Metrics