import {Link} from 'react-router-dom'

const CategoryCard=(props)=>{
    const {catDetails}=props
    const {categoryName,categoryImage}=catDetails
    return(
        <Link to={`/category/${categoryName}`} className="item-link">
        <div className="w-32 p-2 text-center bg-white border-2 border-slate-300 m-2 rounded-md">
            <img className="w-full aspect-square rounded"
             src={categoryImage}/>
             <div className="flex flex-row items-center justify-center mt-2">
               <p className="leading-none text-center text-sm text-slate-700">{categoryName}</p>
             </div>
        </div>
        </Link>
    )
}

export default CategoryCard