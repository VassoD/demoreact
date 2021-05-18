import "./MetricItem.css"
import MetricDate from "./MetricDate"

const MetricItem = (props) => {
    // const dispDate = props.date.toISOString();
    // const dispDate = props.date.toLocaleString("en-US",
    // {hour:"2-digit",minute:"2-digit", hour12:false});
    const dispCount = props.count === 0 ? "-" : props.count;

    return <div className="metric-item">  
    {/* <div className="metric-item__date">{dispDate}</div> */}
    {/* metricDate.toISOString() */}
    <div className="metric-item__metric">
        <MetricDate date={props.date} />
        <div>{props.developer}</div>
        <h3>{props.project}</h3>
        {/* Math/floor(Math.random()*100)%2===0 ? "even":"odd" */}
        {/* <h2>{props.client}</h2> */}
    </div>
    <div className="metric-item__count">{dispCount}</div>
    {/* <div className="metric-item__count">{props.count}</div> */}
    </div>
}
export default MetricItem