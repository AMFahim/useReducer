import './App.css';
import PatientManagement from './Components/PatientManagment/PatientManagement';
import ReducerCount from './Components/ReducerCount/ReducerCount';
function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement ></PatientManagement>
    </div>
  );
}

export default App;
