import React from 'react'
import { useSelector } from 'react-redux';
import { fetchUser } from './store';
import { useDispatch} from 'react-redux';

//Estado local.
function User() {
    const [search, setSearch] = React.useState("");
    function handleSearchChange(e){
        setSearch(e.target.value)
    }
   
    //Estado Global.
    const { user, isLoading } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(fetchUser(search))
        setSearch("");
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type = "number" value = {search} onChange = {handleSearchChange} />
                <input type = "submit" value = "Buscar" placeholder="Introduzca numero de ID"/>
            </form>
            {isLoading && <h1>Buscando usuario...</h1>}
            {!isLoading && (
                <div>
                    <div>
                        <label>Nombre: </label>
                        <span>{user?.name || ""}</span>
                    </div>
                     <div>
                        <label>Email: </label>
                        <span>{user?.email || ""}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default User
