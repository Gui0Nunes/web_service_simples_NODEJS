import {getTeste} from "../services/API"

function App() {

  function btnGet(){
    getTeste()
      .then(data => console.log(data))
      .catch(err => console.log(err))

  }

  return (
  <div>
    <button onClick={btnGet}>Acionar API</button>
  </div>

  );
}


export default App;
