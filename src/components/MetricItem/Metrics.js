import "./Metrics.css"
import Card from "../UI/Card"
import MetricsList from "./MetricsList.js"

const Metrics = (props) => {
    console.log("filtering on", props.filterDate)
    const date = new Date(props.filterDate)



    const filteredItems = props.data.filter(item =>{
        return(
            item.date.getYear() === date.getYear() && 
            item.date.getMonth() === date.getMonth() && 
            item.date.getDate() === date.getDate()
        )
    
    })


    return (
        <Card className="metrics">

            <MetricsList data={filteredItems} />


           {/* <MetricItem count={props.data[0].count} project={props.data[0].project} developer={props.data[0].developer} date={props.data[0].date} />
            <MetricItem count={props.data[1].count} project={props.data[1].project} developer={props.data[1].developer} date={props.data[1].date} />
            <MetricItem count={props.data[2].count} project={props.data[2].project} developer={props.data[2].developer} date={props.data[2].date} />
            <MetricItem count={props.data[3].count} project={props.data[3].project} developer={props.data[3].developer} date={props.data[3].date} />
            <MetricItem count={props.data[4].count} project={props.data[4].project} developer={props.data[4].developer} date={props.data[4].date} /> */}
        </Card>
    )
}

export default Metrics