import "./MetricItem.css"
import MetricDate from "./MetricDate"
import Card from "../UI/Card"

const MetricItem = (props) => {
    // const dispDate = props.date.toISOString();
    // const dispDate = props.date.toLocaleString("en-US",
    // {hour:"2-digit",minute:"2-digit", hour12:false});
    const dispCount = props.count === 0 ? "-" : props.count;



    return <Card className="metric-item">  
    <div className="metric-item__metric">
        <MetricDate date={props.date} />
        <div>{props.developer}</div>
        <h3>{props.project}</h3>
    </div>
    <div className="metric-item__count">{dispCount}</div>
    </Card>
}
export default MetricItem