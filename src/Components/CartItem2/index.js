import { Component } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Cookies from "js-cookie";
import "./index.css"

class CartItem2 extends Component{
    state={data:{}}

   
    componentDidMount(){
        this.getFullProductDetails()
    }

    refresh=()=>{
        const {refreshCartAfterProductRemoval}=this.props
        refreshCartAfterProductRemoval()
    }

    removeFromCart=async()=>{
        const {data}=this.state
        console.log(data.productId)
        const apiUrl = 'https://be.abhiramreddy.in/ec/cart/remove';
        const uId = Cookies.get('uid')
        const requestData = {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            userId: uId,
            productId: data.productId
            }),
        };

        try {
            const response = await fetch(apiUrl, requestData);

            if (response.ok) {
            const responseData = await response.json();
            console.log('Success:', responseData);
            this.refresh()
            } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    calculatePriceAndDiscount=()=>{
        const {data}=this.state
        const {calTotal,calDiscount}=this.props
        calTotal(data.price)
        calDiscount(data.dPrice)
    }

    getFullProductDetails=async()=>{
        const {itemDetails}=this.props
        const productid=itemDetails.product_id
        try {
            const response = await fetch(`https://be.abhiramreddy.in/ec/product/${productid}`);
            if (response.ok) {
            const productDetails = await response.json();
            console.log("Product Details:", productDetails);
            this.setState({data:productDetails}, () => {
                this.calculatePriceAndDiscount() 
              })
            } else {
            const errorData = await response.json();
            console.error("Error fetching product details:", errorData.error);
            }
        } catch (error) {
            console.error("Error during product details fetch:", error.message);
        }
        this.setState({product:itemDetails})
    }


    render(){
        const {data} = this.state
        const {itemDetails}=this.props
        const {productName,brand,price,dPrice}=data
        const priceinrupee="₹"+dPrice
        const disPercent=parseInt(100-(dPrice/price)*100)+"%"
        return(
            <>
            <div className="w-full flex justify-between box-border p-2 px-16 mb-4">
                <div className="">
                    <h1 className="font-semibold text-base mb-0">{productName}</h1>
                    <p className="mt-0 text-slate-500">{brand}</p>
                    <div className="flex flex-row items-center mt-2">
                        <h1 className="text-base font-medium ">{priceinrupee}</h1>
                        <p className="text-xs text-gray-500 line-through ml-1 ">{price}</p>
                        <h1 className="font-medium text-green-500 ml-2">{disPercent}</h1>
                    </div>
                    
                </div>
                <div className="flex flex-col justify-between items-end">
                    <h1>{`₹ ${parseInt(itemDetails.quantity)*parseInt(dPrice)}`}</h1>
                    <button onClick={this.removeFromCart}>
                        <MdDeleteOutline className="text-red-500 text-2xl "/>
                    </button>
                </div>
            </div>
            <div className="px-10">
                <div className="divider "></div>
            </div>
            </>
        )
    }
}

export default CartItem2