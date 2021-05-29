// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import AddMetric from "./components/EditMetricItem/AddMetric";
import Metrics from "./components/MetricItem/Metrics";
import FilterMetrics from "./components/FilterMetrics/FilterMetrics";
// import Fanzine FilterMetric from "./components/FilterMetric";


function App() {
  const metrics = [
    {
      date: new Date(2021, 4, 12, 17, 39, 0, 0),
      developer: "Aklilu",
      project: "StockMarket Backend App",
      count: 5,
    },
    {
      date: new Date(2021, 4, 11, 19, 32, 0, 0),
      developer: "Joni",
      project: "Fanzine Mobile App",
      count: 0,
    },
    {
      date: new Date(2021, 4, 11, 18, 40, 0, 0),
      developer: "Vassiliki",
      project: "Fanzine Mobile App",
      count: 3,
    },
    {
      date: new Date(2021, 4, 12, 17, 30, 0, 0),
      developer: "Joni",
      project: "StockMarket Backend App",
      count: 22,
    },
    {
      date: new Date(2021, 4, 12, 15, 23, 0, 0),
      developer: "Theodoros",
      project: "StockMarket Mobile App",
      count: 0,
    }
  ]

  const addedMetricHandler =(metric) =>{
    console.log("the form gave me a new metric to add", metric)
  }
  const newStartDateSetHandler = (startDate) => {
    console.log("Start date set to",startDate)
  }

  return (
    <div>
      <AddMetric onAddMetric={addedMetricHandler}/>
      <FilterMetrics onSetStartDate={newStartDateSetHandler} />
      <Metrics data={metrics}/>
    </div>

  );
}

export default App;