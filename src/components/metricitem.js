import "./MetricItem.css"

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
    </div>
}
export default MetricItem;