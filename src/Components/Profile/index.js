import { Component } from "react";
import Header3 from "../Header3";
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'


class Profile extends Component{
    state={userDetails:{},userAddressDetails:{}}

    getProfileDetails=async()=>{
        const uId = Cookies.get('uid')
        console.log(uId)
        try {
            const userId = uId; 
          
            const response = await fetch(`https://apin.abhiramreddy.shop/ec/user/${userId}`, {
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
          
            const response = await fetch(`https://apin.abhiramreddy.shop/ec/user/address/${userId}`, {
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
        const {userDetails,userAddressDetails}=this.state

        return(
            <div className="font-[Poppins] w-screen">
                <Header3/>
                <div className="p-16">
                    <div className="w-full">
                        <h1 className="text-2xl font-bold">Profile</h1>
                    </div>
                    
                    <div className="bg-slate-200 mt-4">
                        <div className="flex flex-row">
                            <div className="w-32 p-2 border-2 border-slate-300">
                                <h1>Name</h1>
                            </div>
                            <div className=" p-2 border-2 border-slate-300 w-full">
                                <h1>{userDetails.name}</h1>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-32 p-2 border-2 border-slate-300">
                                <h1>Mail Id</h1>
                            </div>
                            <div className=" p-2 border-2 border-slate-300 w-full">
                                <h1>{userDetails.email}</h1>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-32 p-2 border-2 border-slate-300">
                                <h1>Address</h1>
                            </div>
                            <div className=" p-2 border-2 border-slate-300 w-full">
                                {userAddressDetails.is_given==="0"?<Link to={`/address`} className="bg-emerald-950 text-white p-1">Add Address</Link>:<h1>{userAddressDetails.address}</h1>}
                            </div>
                        </div>
                    </div>
                    <h1 className="mt-6 text-lg font-semibold">Past Orders</h1>
                    <div className="w-full h-64 flex flex-col items-center justify-center">
                        <p>No Past Orders to show</p>
                        <Link to={"/"}>
                            <button className="bg-black px-4 py-2 text-white rounded-lg mt-2">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile