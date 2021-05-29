import "./Metrics.css"
import MetricItem from "./MetricItem"
import Card from "../UI/Card"

const Metrics = (props) => {
    return (
        <Card className="metrics">
        { 
            props.data.map((item) =>{
            return <MetricItem count={item.count} project={item.project} developer={item.developer} date={item.date}/>
        })
        }
           {/* <MetricItem count={props.data[0].count} project={props.data[0].project} developer={props.data[0].developer} date={props.data[0].date} />
            <MetricItem count={props.data[1].count} project={props.data[1].project} developer={props.data[1].developer} date={props.data[1].date} />
            <MetricItem count={props.data[2].count} project={props.data[2].project} developer={props.data[2].developer} date={props.data[2].date} />
            <MetricItem count={props.data[3].count} project={props.data[3].project} developer={props.data[3].developer} date={props.data[3].date} />
            <MetricItem count={props.data[4].count} project={props.data[4].project} developer={props.data[4].developer} date={props.data[4].date} /> */}
        </Card>
    )
}

export default Metrics