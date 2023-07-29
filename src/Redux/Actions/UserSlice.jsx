import {createSlice} from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name : 'userSlice',
    initialState : {users:[
            {
                id : 1 ,
                name: "ysf"
            },{
                id : 2 ,
                name: "Sysf"
            },
        ]},
    reducers : {
        addUser : (state , action)=>{
            const payload = action.payload
            if(payload.id !="" && payload.name!=""){
                state.users.push(payload)
            }
        },
        deleteUser : (state,action)=>{
          const name  = action.payload.name ;
          return {users:state.users.filter(u=>u.name!=name)}
        },
        sortUsersByID:(state , action )=>{
            const sortingAction = action.payload
            if(sortingAction =='up'){
                state.users.sort((a,b)=>a.id-b.id)
            }else{
                state.users.sort((a,b)=>b.id-a.id)
            }
        },
        updatingUser : (state , action )=>{

            const user = action.payload.ActualUser
            const updateUser =action.payload.updatedUser.name
            const findUser = state.users.find(user=>user.id==user.id)
            findUser.name=updateUser
        }
    }
})
export default  UserSlice.reducer
export const  {addUser , deleteUser , sortUsersByID , updatingUser} = UserSlice.actions