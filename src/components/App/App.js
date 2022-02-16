import './App.css';
import Hw2 from '../Hw2/Hw2';

const strings = {
  name: "Alex",
  speciality: "manager",
  city: "Kyiv",
}

function App() {
  return (
    <div className="App">
      <Hw2>
        {strings.name}
      </Hw2>
      <Hw2>
        {strings.speciality}
      </Hw2>
      <Hw2>
        {strings.city}
      </Hw2>
    </div>

  );
}

export default App;
