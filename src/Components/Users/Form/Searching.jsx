import {useDispatch, useSelector} from "react-redux";
import {useRef, useState} from "react";

export const Searching = ()=>{
    const dispatch=useDispatch()
    const store = useSelector(store=>store.slice1)
    const [findUser  , setFindUser] = useState([])
    const userHandler=({target})=>{
        const userName = target.value  ;
        const U = store.users.filter(u=>u.name==userName)
        U?setFindUser(U):setFindUser([])


    }
    return <>
        <form action="" onSubmit={(e)=>e.preventDefault(e)}>
            <label htmlFor="">chercher par  'userName'  </label>
            <br/>
            <input type="text" name="" id="" onChange={userHandler}/>
        </form>
        {findUser.map(user=>{
            return <ul key={user.id}>
                <li> <strong>id</strong> : {user.id}</li>
                <li><strong>userName</strong> : {user.name}</li>
                <hr/>
            </ul>
        })}

    </>
}