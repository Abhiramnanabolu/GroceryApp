
const ItemCard=(props)=>{
    const {pdetails,clickAddBtn}=props
    const {productName,brand,price,dPrice,imgUrl,quantity,category,id}=pdetails
    const priceinrupee="₹"+dPrice
    const disPercent=parseInt(100-(dPrice/price)*100)+"%"

    const onClickAddBtn=()=>{
        console.log(id)
        clickAddBtn(id)
    }

    return(
        <li key={id} className="w-72 rounded p-3 border border-slate-200">
            <div className="border rounded-md border-slate-200">
                <div className="bg-green-900 w-20 flex flex-row justify-center rounded-tl-lg rounded-br-lg">
                    <p className="text-white text-xs p-1">{disPercent}</p>
                </div>
                <img src={imgUrl} className="w-full"/>
            </div>
            <p className="font-serif text-sm text-gray-500 mt-1">{brand}</p>
            <h1 className="mt-2">{productName}</h1>
            <h2 className="text-gray-500 text-sm">{quantity}</h2>
            < div className="flex flex-row mt-1">
                <h1 className="text-base font-bold">{priceinrupee}</h1>
                <p className="text-xs text-gray-500 line-through pt-1 pl-1">{price}</p>
            </div>
            <button className="p-1 rounded text-white bg-red-600 w-32 mt-3" onClick={onClickAddBtn}>Add</button>
        </li>
    )
}

export default ItemCard