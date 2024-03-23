import { Component } from "react"
import Cookies from 'js-cookie'

class ItemCard extends Component {
    state={q:0}

    onClickAddBtn=async(productId)=>{
        const {pdetails}=this.props
        console.log(productId,pdetails.productName)
        this.setState({q:1})
        console.log("onClickAdd Triggered")
        const apiUrl = 'https://apin.abhiramreddy.shop/ec/cart/add';
        const uId = Cookies.get('uid')
        const requestData = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            userId: uId,
            productId: pdetails.productId,
            quantity: 1,
            price: pdetails.dPrice,
            }),
        };

        try {
            const response = await fetch(apiUrl, requestData);

            if (response.ok) {
            const responseData = await response.json();
            console.log('Success:', responseData);
            } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    }

    onQDec=()=>{
        const {q}=this.state
        if (q===1){
            this.setState((prevState)=>({q:prevState.q-1}),
            () => {
              this.removeFromCart() // Move API call here to ensure updated state
            },)
        }
        else{
            this.setState((prevState)=>({q:prevState.q-1}),
            () => {
              this.addToCart() // Move API call here to ensure updated state
            },)
        }
        
    }

    onQInc=()=>{
        this.setState((prevState)=>({q:prevState.q+1}),
        () => {
          this.addToCart() // Move API call here to ensure updated state
        },)
    }

    

    addToCart = async () => {
        const q = this.state
        const {pdetails}=this.props
        const apiUrl = 'https://apin.abhiramreddy.shop/ec/cart/update-quantity';
        const uId = Cookies.get('uid')
        const requestData = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            userId: uId,
            productId: pdetails.productId,
            newQuantity: q.q
            }),
        };

        try {
            const response = await fetch(apiUrl, requestData);

            if (response.ok) {
            const responseData = await response.json();
            console.log('Success:', responseData);
            } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    removeFromCart = async () => {
        console.log("removeFromCart Triggered")
        const {pdetails}=this.props
        const apiUrl = 'https://apin.abhiramreddy.shop/ec/cart/remove';
        const uId = Cookies.get('uid')
        const requestData = {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            userId: uId,
            productId: pdetails.productId
            }),
        };

        try {
            const response = await fetch(apiUrl, requestData);

            if (response.ok) {
            const responseData = await response.json();
            console.log('Success:', responseData);
            } else {
            const errorData = await response.json();
            console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };



    render(){
    const {pdetails}=this.props
    const {q}=this.state
    const {productName,brand,price,dPrice,imgUrl,quantity,productId}=pdetails
    const priceinrupee="₹"+dPrice
    const disPercent=parseInt(100-(dPrice/price)*100)+"%"

    return(
        <div key={productId} className="w-52 m-1 rounded p-3 border border-slate-200">
            <div className="border rounded-md border-slate-200">
                <div className="bg-green-900 w-20 flex flex-row justify-center rounded-tl-lg rounded-br-lg">
                    {parseInt(100-(dPrice/price)*100)===0?"":<p className="text-white text-xs p-1">{disPercent}</p>}
                </div>
                <img src={imgUrl} alt="product" className="w-full"/>
            </div>
            <p className="font-serif text-sm text-gray-500 mt-1">{brand}</p>
            <h1 className="mt-2">{productName}</h1>
            <h2 className="text-gray-500 text-sm">{quantity}</h2>
            <div className="flex flex-row mt-1">
                <h1 className="text-base font-bold">{priceinrupee}</h1>
                <p className="text-xs text-gray-500 line-through pt-1 pl-1">{price}</p>
            </div>
            {q===0?<button className="p-1 rounded text-white bg-red-600 w-32 mt-3" onClick={() => this.onClickAddBtn(productId)}>Add</button>:<div className="w-32 text-white rounded mt-3 flex">
                <button onClick={this.onQDec} className="px-4 py-1 bg-red-600 grow rounded-tl rounded-bl">-</button>
                <div className="bg-red-600 flex items-center">{q}</div>
                <button onClick={this.onQInc} className="px-4 py-1 bg-red-600 grow rounded-tr rounded-br">+</button>
            </div>}
        </div>
    )
  }
}

export default ItemCard