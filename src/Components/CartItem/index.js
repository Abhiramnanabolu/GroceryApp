import { Component } from "react";

class CartItem extends Component{
    state={product:{"a":"b"}}

   
    componentDidMount(){
        this.getFullProductDetails()
    }

    getFullProductDetails=async()=>{
        const {itemDetails}=this.props
        const productid=itemDetails.product_id
        try {
            const response = await fetch(`http://localhost:3001/ec/product/${productid}`);
            console.log(response)
            if (response.ok) {
            const productDetails = await response.json();
            console.log("Product Details:", productDetails);
            this.setState({product:{"a":"b"}})
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
        const {product} = this.state
        const {productName,brand,price,dPrice,imgUrl,quantity,productId}=product
        return(
            <div className="w-full flex">
                <div>
                    <img src={imgUrl}/>
                </div>
            </div>
        )
    }
}

export default CartItem