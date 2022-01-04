import logo from './logo.svg';
import './App.css';
import LineStudy from './components/lineStudy.jsx';
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Stroud Line Study App 
        </p>
        
        <LineStudy data = "testdata" />

      </header>
    </div>
  );
}

export default App;
