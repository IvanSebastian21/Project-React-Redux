import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchUser, increment, incrementAsync } from "./store";

//¿Como conecto sin pasarle mapStateToProps? -> Otra solucion que resuelve a partir de la linea 25

//Función solo para componentes de tipo funcional. Usando Hooks
function Buttons() {
    const dispatch = useDispatch()
    return (
        <div>
            <button 
                onClick={() => {
                    dispatch(increment());
                    }}
            >+</button>
            <button 
                onClick={() => {
                    dispatch(incrementAsync());
                    }}
            >+ Async</button>  
            <button 
                onClick={() => {
                    dispatch(fetchUser(1));
                    }}
            >Fetch User 1 </button>                       
        </div>
    );
}

export default (Buttons);

/* 
// Nota: Esta es una manera legacy. 
import { connect } from 'react-redux';
import { increment } from "./store";

 function Buttons(props) {
    return (
        <div>
            <button 
                onClick={() => {
                    props.increment();
                    }}
            >+</button>
        </div>
    );
} 
export default connect(null, { increment })(Buttons);
*/