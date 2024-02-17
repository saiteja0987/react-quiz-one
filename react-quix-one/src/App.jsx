import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponents';
import QuizComponent from './components/QuizComponents';
import ResultComponent from './components/ResultComponents';

function App() {
  return (
    <div className="App">
      <div className="components">
      <HomeComponent />
      </div>
      <div className="components">
      <QuizComponent/>
      </div>
      <div className="components">
      <ResultComponent/>
      </div>
    </div>
  );
}

export default App;