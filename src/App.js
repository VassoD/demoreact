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

  const metrics = [
{   
    date: new Date(2021, 4, 12, 17, 35, 0 , 0),
    developer: "Vassiliki D",
    project: "StockMarket Mobile App",
    count: 16,
  },

  {   
    date: new Date(2021, 4, 12, 17, 35, 0 , 0),
    developer: "Vassiliki D",
    project: "StockMarket Mobile App",
    count: 16,
  },

  {   
    date: new Date(2021, 4, 12, 17, 35, 0 , 0),
    developer: "Vassiliki D",
    project: "StockMarket Mobile App",
    count: 16,
  }

]
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
        count={metrics[0].count}
        project={metrics[0].project}
        developer={metrics[0].developer} 
        date={metrics[0].date}
        client="Microsoft" 
        />
      <MetricItem 
        count={metrics[1].count}
        project={metrics[1].project}
        developer={metrics[1].developer} 
        date={metrics[1].date}
        client="Odyssea"
      />
      <MetricItem />

      </div>
  );
}
 
export default App;
