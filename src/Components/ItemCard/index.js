import { Component } from "react"

class ItemCard extends Component {
    state={q:0}

    onClickAddBtn=(productId)=>{
        const {pdetails}=this.props
        console.log(productId,pdetails.productName)
        this.setState({q:1})
    }

    onQDec=()=>{
        this.setState((prevState)=>({q:prevState.q-1}))
    }

    onQInc=()=>{
        this.setState((prevState)=>({q:prevState.q+1}))
    }

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