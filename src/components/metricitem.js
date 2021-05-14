import "./MetricItem.css"

<<<<<<< HEAD
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
=======
const MetricItem = () => {
    let metricDate=new Date(2021, 4, 12, 17, 35, 0 , 0);
    let metricDeveloper = "Vassiliki D"
    let project = "StockMarket Mobile App"
    let count = 16

    return <div className="metric-item">  
    <div className="metric-item__date">{metricDate.toISOString()}</div>
    <div className="metric-item__metric">
        <div>{metricDeveloper}</div>
        <div>{project}</div>
        {/* Math/floor(Math.random()*100)%2===0 ? "even":"odd" */}
    </div>
    <div className="metric-item__count">16</div>
>>>>>>> a2e483f82336a333c9945053e2756590d171f5ba
    </div>
}
export default MetricItem;