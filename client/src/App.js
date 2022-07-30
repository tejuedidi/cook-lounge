import React from 'react'
// import './App.css';

function App() {
  // var that holds and contains the data that we recieve from backend API
  const [clientData, setclientData] = React.useState(null);
  //fetch backend API
  React.useEffect(() => {
    // adding in route as this is were we will fetch the data from
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        // set fetched data to BackendData var
        setclientData(data.message);
      }
      ) // got json response
  }, []) //pass empty array so it runs on first render

  // displaying backend data on front end
  return (
    <div className='App'>
      <header className="App-header">
        <p>{!clientData ? "Loading..." : clientData}</p>
      </header>
    </div>
  )
}

export default App;
