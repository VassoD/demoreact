import "./MetricItem.css"

const MetricItem = (props) => {

    return <div className="metric-item">  
    <div className="metric-item__date">{props.da.toISOString()}</div>
    {/* metricDate.toISOString() */}
    <div className="metric-item__metric">
        <div>{props.developer}</div>
        <h3>{props.project}</h3>
        {/* Math/floor(Math.random()*100)%2===0 ? "even":"odd" */}
        <h2>{props.client}</h2>
    </div>
    <div className="metric-item__count">{props.count}</div>
    </div>
}
export default MetricItem;