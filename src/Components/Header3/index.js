import { Component } from "react";
import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'


const Header3=(props)=>{
        const onLogout=()=>{
            Cookies.remove('jwt_token')
            Cookies.remove('uid')
            const {history} = props
            history.replace('/login')
        }
        return(
            <div className="w-screen bg-emerald-950 flex flex-row items-center justify-between font-[Poppins]">
                <img alt="logo" src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1708149494/Grocify-logos_white_oul0xm.png" className="w-48 p-2"/>
                <button onClick={onLogout} className="bg-red-600 px-4 py-2 text-white rounded-lg mr-4">Logout</button>
            </div>
        )
    }


export default withRouter(Header3)