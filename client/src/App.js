import './App.css';
import LineStudy from './components/LineStudy/lineStudy.jsx';

import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Line Study Web App Proof of Concept
      </header>
      
      <div className='tool-wrapper'>
        <LineStudy data = "testdata" />
      </div>

    </div>
  );
}

export default App;
