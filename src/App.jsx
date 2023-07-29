import {FormUser} from "./Components/Users/Form/FormUser";
import {useDispatch, useSelector} from "react-redux";
import {User} from "./Components/Users/User";
import {sortUsersByID} from "./Redux/Actions/UserSlice.jsx";
import {Searching} from "./Components/Users/Form/Searching";
import {fetchUsers} from "./Components/Api/ApiUsers.jsx";
function App() {
    //*** asyncThunk store ;
    const data = useSelector(state=>state.usersAPI.users)
    const loading = useSelector(state=>state.usersAPI.loading)
    const error = useSelector(state=>state.usersAPI.error)


    const loadUsers = ()=>{
        dispatch(fetchUsers())

    }


    //*******
    const userStore = useSelector(store =>store.slice1.users)
    const dispatch =useDispatch()
    const sortingHandler = (action)=>{
        dispatch(sortUsersByID(action))
    }
    return <>
        <FormUser/> <br/>
        <button onClick={()=>sortingHandler("up")}>up </button>
        <button onClick={()=>sortingHandler("down")}>down</button>
        <hr/>
        <Searching />
        <hr/>
        UserLists ({userStore.length>0 ? (userStore.length):"0"})
        {userStore!=0 && (<table border={1}>
            <thead>
            <tr>
                <td>userID</td>
                <td>userName</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            {userStore.map(user=>{return <User user={user} key={user.id}/>})}
            </tbody>
        </table>)}

        <hr/>
        <strong><h1>Redux AsyncThunk</h1></strong>
        <h3>lister UsersApi </h3>
        <br/>
        <button onClick={loadUsers}>charger Users</button>
        {loading && <h2>chargement ... </h2>}
        {(!loading && data.length>0)
        &&
        <ul>
            {data.map(users => <li key={users.id}>
                {users.name}
            </li>)}
        </ul>
        }
        {(!loading&&error)&&<p style={{color : "red "}}>{error.message}</p>}
    </>
}

export default App

