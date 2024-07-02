import React from 'react';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Augur Dashboard</h1>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
