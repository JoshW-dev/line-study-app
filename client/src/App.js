import logo from './logo.svg';
import './App.css';
import LineStudy from './components/lineStudy.jsx';
import "antd/dist/antd.css";
import lineStudyImage from './images/lineStudyTemplate.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lineStudyImage} className="App-logo" alt="logo" />
        
        <p>
          Stroud Line Study App 
        </p>
        
        <LineStudy data = "testdata" />

      </header>
    </div>
  );
}

export default App;
