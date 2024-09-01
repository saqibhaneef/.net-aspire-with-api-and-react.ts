/* eslint-disable no-debugger */
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [forecasts, setForecasts] = useState([]);

    const requestWeather = async () => {
        const weather = await fetch("api/weatherforecast");
        debugger
        console.log(weather);

        const weatherJson = await weather.json();
        console.log(weatherJson);

        setForecasts(weatherJson);
    };

    useEffect(() => {
        requestWeather();
    }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
          </p>
          <div className="App">
              <header className="App-header">
                  <h1>React Weather</h1>
                  <table>
                      <thead>
                          <tr>
                              <th>Date</th>
                              <th>Temp. (C)</th>
                              <th>Temp. (F)</th>
                              <th>Summary</th>
                          </tr>
                      </thead>
                      <tbody>
                          {(
                              forecasts ?? [
                                  {
                                      date: "N/A",
                                      temperatureC: "",
                                      temperatureF: "",
                                      summary: "No forecasts",
                                  },
                              ]
                          ).map((w) => {
                              return (
                                  <tr key={w.date}>
                                      <td>{w.date}</td>
                                      <td>{w.temperatureC}</td>
                                      <td>{w.temperatureF}</td>
                                      <td>{w.summary}</td>
                                  </tr>
                              );
                          })}
                      </tbody>
                  </table>
              </header>
          </div>
    </>
  )
}

export default App
