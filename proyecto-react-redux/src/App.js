import './App.css';
import { useSelector } from 'react-redux';
import Buttons from './Buttons';
import User from './User';


//Función solo para componentes de tipo funcional. Usando Hooks
function App() {
/*   const count = useSelector((state) => state.count);
  const isLoading = useSelector((state) => state.isLoading); */

  return (
    <div className="App">
      <header className="App-header">
        {/* {isLoading ? <h1>No te rindas, ni aún vencido!</h1>: <> <span>El contador es: {count}</span> <Buttons /></>} */}
        <User />
      </header>
    </div>
  );
}


export default App;

/* 

//Nota: Este App funciona excelente con "Buttons.js" Linea 28.
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <span>El contador es: {props.count}</span>
        <Buttons />
      </header>
    </div>
  );
}

function mapStateToProps(state){
  return {
    count: state.count,
    loading: state.isLoading
  }
}

export default connect(mapStateToProps)(App);

*/