import {Component} from "react"
import Header2 from "../Header2"
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

class AddAddress extends Component{
    state={userDetails:{},userAddressDetails:{},errorstring:"",addressInput:"",successstring:""}

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

    setAddress=async()=>{
        const {addressInput,errorstring,successstring}=this.state
        if (addressInput.length>5){
            try {
                const uId = Cookies.get('uid')
                
                const response = await fetch(`http://localhost:3001/ec/add-address`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    user_id: uId,
                    address:addressInput
                  })
                });
              
                if (response.ok) {
                  const userAddressData = await response.json();
                  console.log("User Address Details:", userAddressData);
                  this.setState({ successstring:userAddressData.message });
              
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
        else{
            this.setState({errorstring:"Address too short"})
        }
    }

    componentDidMount=async()=>{
        console.log("MOUNTED")
        this.getProfileDetails()
        this.getAddress()
    }

    onInpChange=(e)=>{
        this.setState({addressInput:e.target.value})
    }

    render(){
        const {userDetails,userAddressDetails,errorstring,successstring}=this.state
        return(
            <div className="w-screen h-screen font-[Poppins]">
                <Header2/>
                <div className="p-16">
                    <div className="w-full">
                        <h1 className="text-2xl font-bold">Add Address</h1>
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
                                <input type="text" onChange={this.onInpChange} placeholder="Enter Address" className="p-2 w-full"/>
                            </div>
                        </div>
                    </div>
                    <p className="text-red-500">{errorstring}</p>
                    <p className="text-emerald-500">{successstring}</p>
                    <button onClick={this.setAddress} className="bg-emerald-950 text-white py-1 px-6 mt-8">Save</button>
                    
                </div>
            </div>
        )
    }
}

export default AddAddress