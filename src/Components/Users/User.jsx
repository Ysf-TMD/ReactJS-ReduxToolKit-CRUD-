import {useDispatch} from "react-redux";
import {deleteUser, updatingUser} from "../../Redux/Actions/UserSlice.jsx";
import {useState} from "react";

export const User =({user})=> {
    const dispatch =useDispatch()
    const [flag , setFlag]=useState(false)
    const [updateUser , setUpdateUser] = useState(user)
    console.log(updateUser)
    const deleteHandler=()=>{
        dispatch(deleteUser(user))
    }
    const udpateHandler =()=>{
        dispatch(updatingUser({
            updatedUser : updateUser ,
            ActualUser : user
        }))
        setFlag(prevState => !prevState)
    }
    const flagHandler = ()=>{
        setFlag(prevState=>!prevState)
    }

    return <>
        <tr>
            <td>{user.id}</td>
            <td>{flag ? <input type="text"
                               name=""
                               id=""
                               value={updateUser.name}
                               onChange={({target})=>setUpdateUser({...updateUser , name:target.value})}  />
                :
                <>{user.name}</>
            }

            </td>
            <td>
                {flag ?
                <>
                    <button onClick={udpateHandler}>Confirmer</button>{" "}
                    <button onClick={flagHandler}>Annuler</button>
                </> :
                    <>
                        <button onClick={deleteHandler}>supprimer</button> {""}
                        <button onClick={flagHandler}>Modifier</button>
                    </>

                }


            </td>
        </tr>
    </>
}