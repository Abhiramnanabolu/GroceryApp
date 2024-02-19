import { Component } from "react";
import Cookies from 'js-cookie'
import { FaShippingFast } from "react-icons/fa";
import {Link} from 'react-router-dom'

class Header4 extends Component{
    state={userDetails:{},userAddressDetails:{}}

    getProfileDetails=async()=>{
        const uId = Cookies.get('uid')
        console.log(uId)
        try {
            const userId = uId; // Replace with the actual userId you want to fetch
          
            const response = await fetch(`http://localhost:3001/ec/user/${userId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
          
            if (response.ok) {
              const userData = await response.json();
              console.log("User Details:", userData);
              this.setState({userDetails:userData})
          
              // Handle the user data as needed
            } else {
              const errorData = await response.json();
              console.error("Error fetching user details:", errorData.error);
          
              // Handle the error
            }
          } catch (error) {
            console.error("Error during user details fetch:", error.message);
          
            // Handle other errors
          }
    }

    getAddress=async()=>{
        const uId = Cookies.get('uid')
        try {
            const userId = uId; // Replace with the actual userId you want to fetch
          
            const response = await fetch(`http://localhost:3001/ec/user/address/${userId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
          
            if (response.ok) {
              const userAddressData = await response.json();
              console.log("User Address Details:", userAddressData);
              this.setState({ userAddressDetails: userAddressData[0] });
          
              // Handle the user address data as needed
            } else {
              const errorData = await response.json();
              console.error("Error fetching user address details:", errorData.error);
          
              // Handle the error
            }
          } catch (error) {
            console.error("Error during user address details fetch:", error.message);
          
            // Handle other errors
          }
          
    }

    componentDidMount=async()=>{
        console.log("MOUNTED")
        this.getProfileDetails()
        this.getAddress()
    }

    render(){
        const {userDetails,userAddressDetails}=this.state
        console.log(userDetails.name)
        return(
            <div className="w-screen max-w-screen bg-emerald-950 flex flex-row items-center justify-between font-[Poppins]">
                <Link to={"/"}>
                    <img alt="logo" src="https://res.cloudinary.com/dbs6hvga4/image/upload/v1708149494/Grocify-logos_white_oul0xm.png" className="w-48 p-2"/>
                </Link>
                <div className="flex flex-row items-center">
                    <Link to={`/address`}>
                      <div className="">
                          {userAddressDetails.is_given==="1"?<div className="bg-emerald-900 rounded-md text-white font-[Poppins] text-xs mr-5 p-2">
                              <p className="flex flex-row"><FaShippingFast className="text-xl mr-2"/>Get it in {Math.floor(Math.random() * 30)} hrs</p>
                              <p className="">{userAddressDetails.address}</p>
                          </div>:<Link to={`/address`}><button className=" p-2 bg-black text-white mr-6">Add Address</button></Link>}
                      </div>
                    </Link>
                    
                    <Link to={`/profile`}>
                        <button className="bg-white text-lg rounded-full w-10 h-10 mr-4 flex flex-row justify-center items-center">
                            {userDetails && userDetails.name && typeof userDetails.name === 'string' && userDetails.name.length > 0
                            ? userDetails.name.charAt(0).toUpperCase()
                            : ""}
                        </button>
                    </Link>
                </div>
                
            </div>
        )
    }
}

export default Header4