import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "../Actions/UserSlice.jsx";
import userSliceApi from "../../Components/Api/ApiUsers.jsx";

const Store = configureStore(
    {
        reducer :{
            slice1 : UserSlice,
            usersAPI : userSliceApi
        }
    }
);
export default Store