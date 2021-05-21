import {useState} from "react"
import "./MetricForm.css"

const MetricForm = (props) =>{

    const [developer, setDeveloper] = useState("")

    const developerChangeHandler = (event) => {
        // Whenever i have to use something from an event 
        // I should get the values I want in local variables ASAP!
        // AND THEN use the local variables
        // AND FORGER the event object!!!
        let newValue = event.target.value
        setDeveloper(newValue)
        console.log(`Someone typed ${developer}`)
    }

    const dateChangeHandler = (event) => {
        let newValue = event.target.value
        setDate(newValue)
        console.log(`Someone typed ${date}`)
    }
    const projectChangeHandler = (event) => {
        let newValue = event.target.value
        setProject(newValue)
        console.log(`Someone typed ${project}`)
    }
    const [count, setCount] =useState("")
    const countChangeHandler = (event) => {
        let newValue = event.target.value
        setCount(newValue)
        console.log(`Someone typed ${count}`)
    }

    const genericChangeHandler = event =>{
        if (event.target.id == "date")
    
    }

    return (
        <form>
                <div className="add-metric__elements">
                    <div className="add-metric__element">
                    <label>Date</label>
                    <input type="datetime-local" / onChange={dateChangeHandler}>
                </div>
                <div className="add-metric__element">
                    <label>Developer</label>
                    <input type="text" onChange={developerChangeHandler} />
                </div>
                <div className="add-metric__element">
                    <label>Project</label>
                    <input type="text" onChange={projectChangeHandler} />
                </div>
                <div className="add-metric__element">
                    <label>Count</label>
                    <input type="number" min="0" step="1" onChange={developerChangeHandler} />
                </div>   
            </div>
            <div className=""
            </form>

                )
}