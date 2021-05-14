import logo from './logo.svg';
import './App.css';

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
import MetricItem from "./components/MetricItem"

function App() {


    let metricDate=new Date(2021, 4, 12, 17, 35, 0 , 0);
    let metricDeveloper = "Vassiliki D"
    let project = "StockMarket Mobile App"
    let count = 16

  return (
    <div>
      <h1>Hello Odyssea</h1>
      <div>
        <input type="text" defaultValue= "username"></input>
        <input type="password" oonclick="()=>{}"></input>
        <p id="par1"></p>
        <p id="par2">Hi from inside</p>

      </div>
      <MetricItem 
        count={count}
        project={project}
        client="Microsoft" 
        developer={metricDeveloper} 
        date={metricDate}
        />
      <MetricItem 
        count="4"
        project="Backend App"
        developer="Theo"
        date="13/5 19:15"
        client="Odyssea"
      />
      <MetricItem />

      </div>
  );
}
 
export default App;
