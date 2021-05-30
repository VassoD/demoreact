import { useState } from "react"
import "./MetricForm.css"


const MetricForm = (props) =>{

        const [userDeveloper, setUserDeveloper] = useState("")
    
        const developerChangedHandler = (event) => {
        // Whenever i have to use something from an event 
        // I should get the values I want in local variables ASAP!
        // AND THEN use the local variables
        // AND FORGER the event object!!!
        let newValue =  event.target.value
        setUserDeveloper(newValue)
        console.log(`Someone typed ${userDeveloper}`)
    }

    const [userDate, setUserDate] = useState("")
    const dateChangedHandler = (event) => {
        let newValue =  event.target.value
        setUserDate(newValue)
        console.log(`Someone typed ${userDate}`)
    }

    const [userProject, setUserProject] = useState("")
    const projectChangedHandler = (event) => {
        let newValue =  event.target.value
        setUserProject(newValue)
        console.log(`Someone typed ${userProject}`)
    }

    const [userCount, setUserCount] = useState("")
    // const countChangedHandler = (event) => {
    //     let newValue =  event.target.value
    //     setUserCount(newValue)
    //     console.log(`Someone typed ${userCount}`)
    // }

    const onSubmitHandler = event => {
        event.preventDefault();
        const newMetric = {
            id: Math.random(),
            date: userDate,
            developer: userDeveloper,
            project: userProject,
            count: userCount,
          }
      
        console.log("my new metric", newMetric)
        props.onAddMetric(newMetric)
        
        console.log("Reseting form data")
        setUserDate("")
        setUserProject("")
        setUserDeveloper("")
        setUserCount("")
    } 

    // const doubleClickHandler = (event) => {
    //     event.preventDefault();
    //     setUserCount(userCount * 2)

    //     setUserCount{(previousUserCount) => {return previousCount * 2})
    // }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="add-metric__elements">
                <div className="add-metric__element">
                    <label>Date</label>
                    <input type="datetime-local" value={userDate} onChange={dateChangedHandler} />
                </div>
                <div className="add-metric__element">
                    <label>Developer</label>
                    <input type="text" value={userDeveloper} onChange={developerChangedHandler} />
                </div>
                <div className="add-metric__element">
                    <label>Project</label>
                    <input type="text" onChange={projectChangedHandler} />
                </div>
                <div className="add-metric__element">
                    <label>Count</label>
                    <input type="number" min="0" step="1" value={userCount} />
                </div>

            </div>
            <div className="add-metric__actions">
                <button type="submit">Add metric</button>
                <button onClick={"doubleClickHandler"}>Double</button>
            </div>
        </form>
    )
}

export default MetricForm