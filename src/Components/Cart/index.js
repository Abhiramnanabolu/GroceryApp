import { Component } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Header4 from "../Header4";
import Cookies from "js-cookie";
import CartItem2 from "../CartItem2";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Cart extends Component{
    state={productsInCart:[],total:0,discount:0}

    componentDidMount() {
        this.getProductsInCart()
    }

    calTotalPrice=(a)=>{
        this.setState(prevState=>({total:prevState.total+parseInt(a)}))
    }

    calDiscountPrice=(b)=>{
        this.setState(prevState=>({discount:prevState.discount+parseInt(b)}))
    }

    getProductsInCart=async()=>{
        const uId = Cookies.get('uid')
        try {
            const response = await fetch(`https://be.abhiramreddy.in/ec/cart/products`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId:uId
              })
            });
          
            if (response.ok) {
              const cartData = await response.json();
              this.setState({productsInCart:cartData})
          
            } else {
              const errorData = await response.json();
              console.error("Error fetching user details:", errorData.error);
          
            }
          } catch (error) {
            console.error("Error during user details fetch:", error.message);
          
          }
    }

    refreshCartAfterProductRemoval=()=>{
        this.getProductsInCart()
    }

    render(){
        const {history} = this.props
        const {productsInCart,total,discount}=this.state
        return(
            <div className="w-screen max-w-full font-[Poppins] box-border">
                <Header4/>
                <div className="w-full box-border">
                    <button className="flex items-center mt-5 ml-8" onClick={() => history.goBack()}>
                        <FaArrowLeft className="text-slate-600 font-light text-sm"/>
                        <p className="text-slate-600 font-light ml-2">Back</p>
                    </button>
                    <h1 className="font-bold text-2xl ml-8 mt-4">Your Cart</h1>
                    {productsInCart.length===0?
                        <div className="w-full h-64 flex flex-row justify-center drop-shadow-2xl items-center p-10">
                            <div className="drop-shadow-xl flex flex-col justify-center items-center ">
                                <h1 className="mt-4">Your Cart is Empty</h1>
                                <Link to={"/"}>
                                    <button className="mt-6 bg-black text-white px-4 py-2 rounded">Order Now</button>
                                </Link>
                            </div>
                        </div>:
                    <div className=" m-10 flex flex-row ">
                        <div className="w-9/12 bg-white rounded drop-shadow-2xl mr-12">
                            {productsInCart.map(eachItem=>(
                                <CartItem2 itemDetails={eachItem} refreshCartAfterProductRemoval={this.refreshCartAfterProductRemoval} calTotal={this.calTotalPrice} calDiscount={this.calDiscountPrice}/>
                            ))}
                        </div>
                        <div className="w-3/12 h-fit p-4 bg-white font-[Poppins]  drop-shadow-lg">
                            <div>
                                <h1 className="text-lg font-semibold">Price Details</h1>
                                <div className="px-1 mt-5">
                                    <div className="divider "></div>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <h1 className="text-base font-light">Total Price</h1>
                                    <h1 className="font-medium">{`₹ ${total}`} </h1>
                                </div>
                                <div className="flex justify-between mt-3">
                                    <h1 className="text-base font-light">Discount</h1>
                                    <h1 className="font-medium text-green-500">{`- ₹ ${total-discount}`}</h1>
                                </div>
                                <div className="flex justify-between mt-3">
                                    <h1 className="text-base font-light">Delivery Charges</h1>
                                    <h1 className="font-medium text-green-500">Free</h1>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <h1 className="text-base font-semibold">Total Amount</h1>
                                    <h1 className="font-semibold">{`₹ ${discount}`} </h1>
                                </div>
                            </div>
                        </div>
                    </div>
    }
                </div>
            </div>
        )
    }
}

export default Cart