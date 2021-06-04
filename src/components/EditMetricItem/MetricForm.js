import { useState } from "react"
import "./MetricForm.css"
import Input from "../UI/Input"


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
    const countChangedHandler = (event) => {
        let newValue =  event.target.value
        setUserCount(newValue)
        console.log(`Someone typed ${userCount}`)
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        const newMetric = {
            id: Math.random(),
            date: new Date(userDate),
            developer: userDeveloper,
            project: userProject,
            count: userCount,
          } 
        
        console.log("my new metric", newMetric)
        if (props.onAddMetric(newMetric)){
        
        console.log("Reseting form data")
        setUserDate("")
        setUserProject("")
        setUserDeveloper("")
        setUserCount("")
        
          }  else {
            console.log("error during validation")
        }
    }  

    // const doubleClickHandler = (event) => {
    //     event.preventDefault();
    //     setUserCount(userCount * 2)

    //     setUserCount{(previousUserCount) => {return previousCount * 2})
    // }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="add-metric__elements">
             
                
                <Input className="add-metric__element"
                    labelText="Date"
                    input={
                        {
                            id: "date",
                            type: "datetime-local",
                            value: userDate,
                            onChange: dateChangedHandler
                        }
                    }

                />
               
                <Input className="add-metric__element"
                    labelText="Project"
                    input={
                        {
                            id: "date",
                            type: "text",
                            value: userProject,
                            onChange: projectChangedHandler
                        }
                    }

                />
       
                <Input className="add-metric__element"
                    labelText="Developer"
                    input={
                        {
                            id: "date",
                            type: "text",
                            value: userDeveloper,
                            onChange: developerChangedHandler
                        }
                    }

                />
                
                <Input className="add-metric__element"
                    labelText="Count"
                    input={
                        {
                            id: "date",
                            type: "number",
                            value: userCount,
                            onChange: countChangedHandler
                        }
                    }

                />
            </div>
            <div className="add-metric__actions">
                <button type="submit">Add metric</button>
                {/* <button onClick={"doubleClickHandler"}>Double</button> */}
            </div>
        </form>
    )
}

export default MetricForm