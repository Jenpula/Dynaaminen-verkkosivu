
import './App.css';
import {useState} from 'react';

function App() {
  const [Age, setAge] = useState(0);
  const [yla, setYla] = useState(0);
  const [ala, setAla] = useState(0);

  //function calculate()
const calculate = (e) => {
 // e.preventDefault();
  setYla ((220 - Age) * 0.85);
  setAla ((220 - Age) * 0.65);
  
}

  return (
    <div className="App">
      {/*<form onSubmit={calculate}>*/}

      <h2>Heart rate limits calculator</h2>

      <div className='form-group'>
        <label>Age</label>
        <input type='number' step='1' value={Age} onChange={e => setAge(e.target.value)}></input>
      </div>
      <div>
      <button type='button' onClick={calculate} class="btn btn-secondary">Laske</button>
      </div>
      <output>{ala.toFixed(0)} - {yla.toFixed(0)}</output>
      {/*</form>*/}
    </div>
    
  );
}

export default App;
