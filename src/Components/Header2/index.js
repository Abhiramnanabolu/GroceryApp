import { Component } from "react";
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

class Header2 extends Component{
    state={userDetails:{},userAddressDetails:{}}

    getProfileDetails=async()=>{
        const uId = Cookies.get('uid')
        console.log(uId)
        try {
            const userId = uId; 
          
            const response = await fetch(`https://be.abhiramreddy.in/ec/user/${userId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
          
            if (response.ok) {
              const userData = await response.json();
              console.log("User Details:", userData);
              this.setState({userDetails:userData})
          
              
            } else {
              const errorData = await response.json();
              console.error("Error fetching user details:", errorData.error);
          
              
            }
          } catch (error) {
            console.error("Error during user details fetch:", error.message);
          
           
          }
    }

    getAddress=async()=>{
        const uId = Cookies.get('uid')
        try {
            const userId = uId; 
          
            const response = await fetch(`https://be.abhiramreddy.in/ec/user/address/${userId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
          
            if (response.ok) {
              const userAddressData = await response.json();
              console.log("User Address Details:", userAddressData);
              this.setState({ userAddressDetails: userAddressData[0] });
          
              
            } else {
              const errorData = await response.json();
              console.error("Error fetching user address details:", errorData.error);
          
              
            }
          } catch (error) {
            console.error("Error during user address details fetch:", error.message);
          
           
          }
          
    }

    componentDidMount=async()=>{
        console.log("MOUNTED")
        this.getProfileDetails()
        this.getAddress()
    }

    render(){
        const {userDetails}=this.state
        console.log(userDetails.name)
        return(
            <div className="w-screen bg-emerald-950 flex flex-row items-center justify-between font-[Poppins]">
                <Link to={"/"}>
                    <img alt="logo" src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1708149494/Grocify-logos_white_oul0xm.png" className="w-48 p-2"/>
                </Link>
                <div className="flex flex-row items-center">
                    
                    <div className="">
                    <Link to={`/profile`}>
                        <button className="bg-white text-lg rounded-full w-10 h-10 mr-4 flex flex-row justify-center items-center">
                            {userDetails && userDetails.name && typeof userDetails.name === 'string' && userDetails.name.length > 0
                            ? userDetails.name.charAt(0).toUpperCase()
                            : ""}
                        </button>
                    </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Header2