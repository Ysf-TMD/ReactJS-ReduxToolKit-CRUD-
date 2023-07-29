import {FormUser} from "./Components/Users/Form/FormUser";
import {useDispatch, useSelector} from "react-redux";
import {User} from "./Components/Users/User";
import {sortUsersByID} from "./Redux/Actions/UserSlice.jsx";
import {Searching} from "./Components/Users/Form/Searching";
function App() {
    const array = [1,2,3]
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

    </>
}

export default App

