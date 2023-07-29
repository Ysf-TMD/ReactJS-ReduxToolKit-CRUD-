// import "../../../Styles/App.css"
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {addUser} from "../../../Redux/Actions/UserSlice.jsx";

export const FormUser =()=>{
    const dispatch = useDispatch()
    const id = useRef()
    const userName = useRef()
    const submitHandler = (e)=>{
        e.preventDefault()
    }
    const userHandler=()=>{
        const userID = id.current.value  ;
        const user = userName.current.value
        dispatch(addUser({
            id:userID ,
            name : user
        }))
        id.current.value="";
        userName.current.value="";
    }
    return (<>
        <div className="container">
            <form onSubmit={submitHandler} className="card">
                <p className="heading">Form</p>
                <div className="input-div">
                    <input type="text" className="input" placeholder="iD" ref={id}/>
                </div>
                <div className="input-div">
                    <input className="input" type="text" placeholder="User" ref={userName}/>
                </div>

                <div className="button-div">
                    <button className="submit" onClick={userHandler}>AjouterUser</button>
                </div>
            </form>
        </div>


    </>)
}
