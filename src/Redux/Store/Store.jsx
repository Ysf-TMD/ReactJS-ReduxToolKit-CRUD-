import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "../Actions/UserSlice.jsx";

const Store = configureStore(
    {
        reducer :{
            slice1 : UserSlice
        }
    }
);
export default Store