import AddMetric from "./components/EditMetricItem/AddMetric";
import Metrics from "./components/MetricItem/Metrics";
import FilterMetrics from "./components/FilterMetrics/FilterMetrics";
import { useState } from "react"
import Login from "./components/Login/Login"
import Modal from "./components/UI/Modal"

  const startupMetrics = [
    { 
      id: 1,
      date: new Date(2021, 4, 12, 17, 39, 0, 0),
      developer: "Aklilu",
      project: "StockMarket Backend App",
      count: 5,
    },
    {
      id: 2 ,
      date: new Date(2021, 4, 11, 19, 32, 0, 0),
      developer: "Joni",
      project: "Fanzine Mobile App",
      count: 0,
    },
    {
      id: 3,
      date: new Date(2021, 4, 11, 18, 40, 0, 0),
      developer: "Vassiliki",
      project: "Fanzine Mobile App",
      count: 3,
    },
    {
      id: 4,
      date: new Date(2021, 4, 12, 17, 30, 0, 0),
      developer: "Joni",
      project: "StockMarket Backend App",
      count: 22,
    },
    {
      id: 5,
      date: new Date(2021, 4, 12, 15, 23, 0, 0),
      developer: "Theodoros",
      project: "StockMarket Mobile App",
      count: 0,
    }
  ]

  function App() {

  const [metrics, setMetrics] = useState(startupMetrics)

  const [startDate, setStartDate] = useState ("2021-05-11")

  const addedMetricHandler =(metric) =>{
    console.log("the form gave me a new metric to add", metric)
    

    // we use the previous state, so DO NOT USE THE SIMPLE setMetrics!!!
    //setMetrics([...metrics, metric] );
    // instead use the setMetrics that knows about the previous state

    setMetrics((prevMetrics) => {return [...prevMetrics, metric] });

    // console.log("my metrics are: ", metrics)

  }


  const newStartDateSetHandler = (startDate) => {
    console.log("Start date set to", startDate)
    setStartDate(startDate);
  }

// const isLoggedIn = true;



  return (
    <div>
      {/* {!isLoggedIn && <Modal><Login/></Modal>} */}
      <Modal><Login/></Modal>
      <AddMetric onAddMetric={addedMetricHandler}/>
      <FilterMetrics startDate={startDate} onSetStartDate={newStartDateSetHandler} />
      <Metrics filterDate={startDate} data={metrics}/>
    </div>

  );
  
}
export default App;